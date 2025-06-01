import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  runApp(const TodoApp());
}

class TodoApp extends StatelessWidget {
  const TodoApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'AISP ToDo App',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      home: const TodoHomePage(),
    );
  }
}

class TodoHomePage extends StatefulWidget {
  const TodoHomePage({super.key});

  @override
  State<TodoHomePage> createState() => _TodoHomePageState();
}

class _TodoHomePageState extends State<TodoHomePage> {
  List tasks = [];
  String newTaskTitle = '';
  bool loading = true;
  String error = '';
  String? token;

  final apiBase = 'http://localhost:3001';

  @override
  void initState() {
    super.initState();
    _loadTokenAndFetch();
  }

  Future<void> _loadTokenAndFetch() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() {
      token = prefs.getString('token');
    });
    if (token != null) {
      _fetchTasks();
    } else {
      setState(() {
        loading = false;
        error = 'JWTトークンがセットされていません';
      });
    }
  }

  Future<void> _fetchTasks() async {
    setState(() {
      loading = true;
      error = '';
    });
    try {
      final res = await http.get(
        Uri.parse('$apiBase/api/todo'),
        headers: {'Authorization': 'Bearer $token'},
      );
      if (res.statusCode == 200) {
        setState(() {
          tasks = json.decode(res.body);
          loading = false;
        });
      } else if (res.statusCode == 401 || res.statusCode == 403) {
        setState(() {
          error = '認証エラー: トークンを確認してください';
          loading = false;
        });
      } else {
        setState(() {
          error = '取得失敗: ${res.statusCode}';
          loading = false;
        });
      }
    } catch (e) {
      setState(() {
        error = '通信エラー';
        loading = false;
      });
    }
  }

  Future<void> _addTask() async {
    if (newTaskTitle.trim().isEmpty) return;
    setState(() {
      error = '';
    });
    try {
      final res = await http.post(
        Uri.parse('$apiBase/api/todo'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $token',
        },
        body: json.encode({'title': newTaskTitle}),
      );
      if (res.statusCode == 200) {
        setState(() {
          tasks.add(json.decode(res.body));
          newTaskTitle = '';
        });
      } else {
        setState(() {
          error = '追加失敗: ${res.statusCode}';
        });
      }
    } catch (e) {
      setState(() {
        error = '通信エラー';
      });
    }
  }

  Future<void> _toggleTask(dynamic task) async {
    setState(() {
      error = '';
    });
    try {
      final res = await http.patch(
        Uri.parse('$apiBase/api/todo/${task['id']}'),
        headers: {'Authorization': 'Bearer $token'},
      );
      if (res.statusCode == 200) {
        final updated = json.decode(res.body);
        setState(() {
          tasks =
              tasks.map((t) => t['id'] == updated['id'] ? updated : t).toList();
        });
      } else {
        setState(() {
          error = '更新失敗: ${res.statusCode}';
        });
      }
    } catch (e) {
      setState(() {
        error = '通信エラー';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('ToDo App')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            if (error.isNotEmpty)
              Text(error, style: const TextStyle(color: Colors.red)),
            Row(
              children: [
                Expanded(
                  child: TextField(
                    decoration: const InputDecoration(hintText: 'New task'),
                    onChanged: (v) => setState(() => newTaskTitle = v),
                    controller: TextEditingController(text: newTaskTitle),
                  ),
                ),
                const SizedBox(width: 8),
                ElevatedButton(onPressed: _addTask, child: const Text('Add')),
              ],
            ),
            const SizedBox(height: 16),
            Expanded(
              child:
                  loading
                      ? const Center(child: CircularProgressIndicator())
                      : ListView.builder(
                        itemCount: tasks.length,
                        itemBuilder: (context, i) {
                          final t = tasks[i];
                          return ListTile(
                            title: Text(
                              t['title'],
                              style: TextStyle(
                                decoration:
                                    t['done']
                                        ? TextDecoration.lineThrough
                                        : null,
                              ),
                            ),
                            onTap: () => _toggleTask(t),
                          );
                        },
                      ),
            ),
          ],
        ),
      ),
    );
  }
}

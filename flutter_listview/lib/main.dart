import 'package:flutter/material.dart';
import 'package:flutter_listview/contact_page.dart';

void main() {
  runApp(new MaterialApp(

    debugShowCheckedModeBanner: false,
    home: new Scaffold(

      appBar: new AppBar(

        title: new Text("List View"),
      ),
      body: new ContactPage(),
    ),
  ));
}

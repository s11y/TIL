import 'package:flutter/material.dart';
import 'package:flutter_bottom_navbar/tabs/first.dart';
import 'package:flutter_bottom_navbar/tabs/second.dart';
import 'package:flutter_bottom_navbar/tabs/third.dart';

void main() => runApp(
  new MaterialApp(
    title: 'Using Tabs',
    home: new MyHome(),
  )
);

class MyHome extends StatefulWidget {

  @override
  MyHomeState createState() => new MyHomeState();
}

class MyHomeState extends State<MyHome> with SingleTickerProviderStateMixin {

  TabController controller;

  @override
  void initState() {
    super.initState();

    controller = new TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {

    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

      return new Scaffold(

        appBar: new AppBar(

          title: new Text("Using Bottom Navigation Bar"),
          backgroundColor: Colors.blue,
        ),
        body: new TabBarView(

          children: <Widget>[new FirstTab(), new SecondTab(), new ThirdTab()],
          controller: controller,
        ),
        bottomNavigationBar: new Material(
          color: Colors.blue,
          child: new TabBar(
            tabs: <Tab>[
              new Tab(
                icon: new Icon(Icons.favorite),
              ),
              new Tab(
                icon: new Icon(Icons.adb)
              ),
              new Tab(
                icon: new Icon(Icons.airport_shuttle)
              )
            ],

            controller: controller,
          ),
        ),
      );
    }
}
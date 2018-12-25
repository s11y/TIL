import 'package:flutter/material.dart';

class SecondTab extends StatelessWidget {

  @override
    Widget build(BuildContext context) {
      // TODO: implement build
      return new Scaffold(
        backgroundColor: Colors.green,
        body: new Container(
          child: new Center(
            child: new Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                new Icon(
                  Icons.adb,
                  size: 160.0,
                  color: Colors.white,
                ),
                new Text(
                  "Second Tab",
                  style: new TextStyle(color: Colors.white)
                )
              ],
            ),
          ),
        ),
      );
    }
}
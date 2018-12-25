import 'package:flutter/material.dart';

class FirstTab extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
      // TODO: implement build
      return new Scaffold(
        backgroundColor: Colors.red,
        body: new Container(
          child: new Center(
            child: new Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                new Icon(
                  Icons.face,
                  size: 160.0,
                  color: Colors.white,
                  ),
                new Text(
                  "First Tab",
                  style: new TextStyle(color: Colors.white)
                )
              ],
            ),
          ),
        ),
      );
  }
}
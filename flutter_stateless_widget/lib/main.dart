import 'package:flutter/material.dart';

void main() => runApp(
  new MaterialApp(
    home: new MyApp(),
    theme: new ThemeData(primarySwatch: Colors.green),
  )
);

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {

    final double textSize = 30.0;
    final double iconSize = 40.0;
    final TextStyle textStyle = new TextStyle(color: Colors.grey, fontSize: textSize);

    var column = new Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[

        new MyCard(

          title: new Text(

            "Favorite",
            style: textStyle,
          ),
          icon: new Icon(Icons.favorite, size: iconSize, color: Colors.red),
        ),
        new MyCard(

          title: new Text(

            "Alarm",
            style: textStyle,
          ),
          icon: new Icon(Icons.alarm, size: iconSize, color: Colors.green),
        ),
        new MyCard(

          title: new Text(

            "Airport Shuttle",
            style: textStyle,
          ),
          icon: new Icon(Icons.airport_shuttle, size: iconSize, color: Colors.amber)
        ),
        new MyCard(

          title: new Text(

            "Done",
            style: textStyle,
          ),
          icon: new Icon(Icons.done, size: iconSize, color: Colors.green,),
        )
      ],
    );

    return new Scaffold(

      appBar: new AppBar(

        title: new Text("Stateless Widget"),
      ),
      body: new Container(

        padding: const EdgeInsets.only(bottom: 2.0),
        child: new Center(

          child: new SingleChildScrollView(child: column),
        ),
      ),
    );
  }
}

class MyCard extends StatelessWidget {
  final Widget icon;
  final Widget title;

  MyCard({this.icon, this.title});

  @override
  Widget build(BuildContext context) {

    return new Container(
      padding: const EdgeInsets.only(bottom: 1.0),
      child: new Card(
        child: new Container(
          padding: const EdgeInsets.all(20.0),
          child: new Column(
            children: <Widget>[this.title, this.icon],
          ),
        ),
      ),
    );
  }
}

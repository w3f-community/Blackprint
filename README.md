<p align="center"><a href="#" target="_blank" rel="noopener noreferrer"><img width="150" src="https://avatars2.githubusercontent.com/u/61224306?s=150&v=4" alt="Blackprint"></a></p>

<h1 align="center">Blackprint</h1>
<p align="center">A general purpose node to node visual scripting interface for lowering programming language's steep learning curve, and introduce an easy way to experimenting with your beautiful project for other developer.</p>

<p align="center">
    <a href='https://github.com/Blackprint/Blackprint/blob/master/LICENSE'><img src='https://img.shields.io/badge/License-MIT-brightgreen.svg' height='20'></a>
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/11073373/82104644-e9d5e900-9741-11ea-9689-fc01ddfa81ab.gif">
</p>

<p align="center">
    Blackprint Editor is built using ScarletsFrame to deliver better <a href="https://krausest.github.io/js-framework-benchmark/current.html">performance</a> and <a href="https://github.com/ScarletsFiction/ScarletsFrame/wiki#advanced-example">features</a>. The standalone Blackprint Interpreter is distributed separately.
</p>

## Documentation
> Warning: This project haven't reach it stable version<br>
> If you use this on your project please put a link or information to this repository.<br>
> Maybe someone skilled like you interested to improve this open source project.<br>
> And because of their contribution, you can enjoy the improved Blackprint :)

Please visit the [Wiki](https://github.com/Blackprint/Blackprint/wiki) for the documentation.

## Some Note
Each interpreter may have different node compatibilities.<br>
For the example:
 - WebAudio related node **only compatible** in the browser.
 - Web server related node is **not compatible** in the browser.

Currently Blackprint will act as interface for each interpreter. Because Blackprint can't transform your code that you have write in a programming language into different programming language, you will need to write code on how to handle Blackprint node with your library in different programming language.

To use it on NodeJS, Deno, or other JavaScript runtime, you can export it to JSON and use [interpreter-js](https://github.com/Blackprint/interpreter-js#example). But it doesn't mean exporting is just like a magic, you also need to write `registerNode` and `registerInterface` on the target interpreter. Except if someone already write the interface on target interpreter you can easily plug and play. Blackprint is planning to have a package manager where developer can import their nodes to another available interpreter.

Below are the list of programming language where Blackprint that's being planned.

> Current priority is JavaScript Interpreter<br>
> Some breaking changes may happen to make it suitable for every language
> If you use the interpreter make sure to specify the version instead of 'latest'

- [JavaScript Interpreter](https://github.com/Blackprint/interpreter-js)
- [PHP Interpreter](https://github.com/Blackprint/interpreter-php)
- Python Interpreter
- C# Interpreter (Still need some sample)

Blackprint Interpreter that being considered:
- Java (I'm curious how much memory it would take)
- Rust (Maybe)
- Crystal (I rarely see this used somewhere)

Planned Code Generation:
- Abstract Syntax Tree
- Dockerfile

## Motivation
<details>
  <summary>Personal story</summary>
  FYI, I have used UE4 Blueprint since 2021. Developing a visual script by connecting nodes was my unfinished project since 2014 with ActionScript3 (Adobe Flash). It was very tough because I almost know nothing how to make curve for the cable. Well, it's not professional to tell a story about my very young age with programming. But the time was passed and I have a feeling like I can continue my old project with my current skill. Thank you Apple for bringing WebKit and Google for V8 engine, and also for some other people who bringing the advanced web technologies.
</details>

The main target of the project is to help developers to modify their program's logic while the program is still running. With proper custom script it can be used to manage IoT, Docker container connections, or virtual cable for electrical stuff. Well, it may feel like a dream but it can be turned into the reality.

Some of the interface design is inpired by UE4 Blueprint, it was designed and could be modified with CSS. I will redesign it after the project reach final stage. Currently this haven't being developed with ES6 modules because the hot node reload mechanism is little different.

## License
MIT

### Note
This project is free to use, because I bring this for our future.<br>
If you use this for commercial project, please consider sponsoring<br>
the people who work behind the Blackprint project.

But if you use Blackprint for creating another free open source project<br>
it may be awesome (๑˃ᴗ˂)ﻭ

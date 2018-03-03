Bot Jerusalem
===============

What?
---------
Simple echo bot to be run on console shell.

How to run?
------------
$: sh bicho.sh

Logic?
------------

# Feature 1

Tell the bot to salute you:

$: sh bicho.sh

Then tell him something.

$: sh yo.sh "something you want to say" 

... w/ output:

```
aleph@oxs-Mac-mini:~/Desktop/redux/bot-jerusalem$ sh bicho.sh
Hola, humano. ¿Quieres decir algo? Soy un bot eco. Repito lo que dices...
aleph@oxs-Mac-mini:~/Desktop/redux/bot-jerusalem$ sh yo.sh "Digo que has dicho que he dicho"
Humano, has dicho: Digo que has dicho que he dicho.
Hola, humano. ¿Quieres decir algo? Soy un bot eco. Repito lo que dices...
aleph@oxs-Mac-mini:~/Desktop/redux/bot-jerusalem$
```

# Feature 2  

Do the "tell a story thing". By triggering [./bicho.sh](bicho.sh) and 
[./yo.sh](yo.sh) from an story notebook.

... w/ output:
 
```
aleph@oxs-Mac-mini:~/Desktop/redux/bot-jerusalem$ sh unaMismaDirecciondosSentidos.sh

 Relato corto, marzo 2018
 =========================
 Nota: B.S.O. Devin Townsend, Supercrush

 Érase una vez...

Hola, humano. ¿Quieres decir algo? Soy un bot eco. Repito lo que dices...
Humano, has dicho: hola, máquina.
Hola, humano. ¿Quieres decir algo? Soy un bot eco. Repito lo que dices...

 Y fueron felices y comieron perdices.
aleph@oxs-Mac-mini:~/Desktop/redux/bot-jerusalem$
```

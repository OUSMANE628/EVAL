Examen Angular 20/07/2022
1. Questions de cours

1. Afin d’indiquer à Angular que je souhaite faire des requêtes http dans mon application,
quel module dois-je impérativement importer dans le app.module.ts ?

je dois importer le module <<HttpClientModule>>


2. Que permet de faire cette ligne de code :
[class.red]="compteur < 0"

Permet d’attribuer la class css red (rouge) au compteur inférieur à 0 c'est à dire negatif


3. Je viens de faire un « git clone » sur un projet Angular, je dois lancer une commande
afin de récupérer le dossier « node_modules », lequel ?

- npm install node_modules


4. Quelle est la différence entre let et const pour la déclaration de variables ?
 - let permet de déclarer une variable dont la portée est limitée au bloc (variable locale)c'est à dire posibilité de modification de la valeur affectée.
 - En revanche, utiliser <<const>> revient à utiliser let , mais une fois qu'une valeur est affectée, elle ne peut pas être modifiée.

5. Un component est constitué de 4 fichiers distinct, quels sont leur rôle respectif ?
Préciser leur extension de fichier à chaque fois (3 me suffisent)
- il y a le (component.html): qui permet d'afficher le contenu de component sur le navigateur
- il y a le (component.scss): qui permet de faire les mises en formes du (component.html)
-un fichier .ts qui permet d’avoir le constructeur du component ,pouvoir importer les différents models , services pour le fonctionnement du component et aussi d’écrire des méthodes.
-un fichier spec.ts qui sert uniquement pour de la configuration et des tests



6. Je suis dans la partie html d’un component, j’écris ce code :
<button (click)=’’superFonctionDeClic()’’></ button>
Que fait-il ?

- vous avez créée un bouton qui permet d'afficher le contenu de  la fonction <superFonctionDeClic()> appeler  



7. Avec quelle commande créée-t-on un component ?
< ng g c  + (nom du component)>


8. Dans une classe, je peux préciser un indice de visibilité sur un attribut ou une méthode,
il en existe 3 lesquels ?
Que font-ils ?

public :les attributs ou methodes seront accessibles à l’intérieur et à l’extérieur de la classe
protected : ils seront accessibles dans la classe et ses enfants
private : ils seront uniquement accessibles à l’intérieur de la classe (get et set pour pouvoir acceder en dehors)
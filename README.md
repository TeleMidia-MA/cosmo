# Cosmo 1.2

## Thanks

[akrabat - Project Skeleton Slim Framework 3](https://github.com/akrabat/slim3-skeleton)

### Technologies

* [Slim Framework 3](www.slimframework.com)
* [Monolog](https://github.com/Seldaek/monolog)
* [JWT JOSE](https://github.com/namshi/jose)
* [Mongo PHP Adapter](https://github.com/alcaeus/mongo-php-adapter)
* [Doctrine ODM](http://docs.doctrine-project.org/projects/doctrine-mongodb-odm/en/latest/)
* [Slim 3 Skeleton](https://github.com/akrabat/slim3-skeleton)
* [MongoDB](http://www.mongodb.org/)
* [Slim Annotation](https://github.com/dilsonjlrjr/slim3-annotation)

### Installation process:

	$ composer install
	$ composer require alcaeus/mongo-php-adapter
	$ composer require "doctrine/mongodb-odm"
	$ cd public/
	$ npm install
	
### Architecture:

* app/database.php - Config database;
* app/src/Controller - Controller the application, use [Slim Annotation](https://github.com/dilsonjlrjr/slim3-annotation) 
for route definition;
* app/src/View - View the application, use [Twig Framework] (https://twig.symfony.com/)
* app/src/Plugin - Folder for plugins
* app/src/Mapper - Folder for Class ODM using [Doctrine ODM](http://docs.doctrine-project.org/projects/doctrine-mongodb-odm/en/latest/)

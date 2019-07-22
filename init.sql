CREATE DATABASE IF NOT EXISTS test;
GRANT ALL ON `test`.* TO 'user'@'%' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;

use test;
DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `detail` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

INSERT INTO `address` (`id`, `address`, `detail`) VALUES (1, '4951 Barton Trafficway\nNew Ignatiusstad, IN 72019-5709', 'Unde molestias est voluptatum neque quia quia.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (2, '3717 Alva Roads\nVandervorttown, NY 52874-1471', 'Enim quo placeat excepturi molestias recusandae voluptatibus.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (3, '1542 Kaleigh Harbor\nNakiaburgh, HI 59344-5109', 'Soluta optio modi illo et et velit voluptatem velit.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (4, '5265 Marvin Expressway Apt. 204\nEdafurt, KS 36202', 'Molestias expedita aut dolorum similique voluptate.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (5, '1051 Ebert Shore\nLake Alexanderport, MT 62198', 'Occaecati rerum provident sunt odit.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (6, '10632 Diana Brooks Apt. 055\nClovisville, NJ 29491-4623', 'Consequatur autem delectus maxime.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (7, '7989 Buckridge Course\nDenesikshire, WA 88335', 'Numquam nihil quis ut quo.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (8, '532 Perry Bypass\nSouth Sybleberg, SD 78933', 'Nulla adipisci consequuntur reiciendis dolores in eveniet saepe.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (9, '06804 Braun Island Suite 754\nGusikowskifurt, WY 87178', 'Mollitia molestiae beatae sed doloribus.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (10, '827 Upton Walk Apt. 107\nJessicaton, MS 91461', 'Assumenda eligendi rerum dolores placeat vel aut qui.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (11, '04974 Moen Curve\nLynchville, SC 74331-8061', 'Sed ipsam atque quia sed praesentium et incidunt.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (12, '107 Gina Falls Apt. 467\nChristopherport, SC 71043', 'Impedit sunt accusantium minus aliquid sed dicta nihil eum.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (13, '6203 Katarina Ville Suite 785\nLake Torey, AZ 34073', 'Assumenda repudiandae deserunt iusto ad nemo dolores.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (14, '596 Schmeler Throughway\nLisafurt, WI 38485', 'Ut at explicabo voluptatem aspernatur.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (15, '441 Koelpin Junctions Apt. 006\nChazfort, AL 16874', 'Qui eaque aut quo consequatur molestiae in voluptatem.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (16, '17878 Sincere Mission Apt. 967\nNew Pearline, TX 75703-7155', 'Quae quisquam rerum quos ducimus enim est.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (17, '647 Ortiz Plaza Suite 016\nPort Juliusside, KS 77940', 'Incidunt officia sit quos voluptatem.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (18, '54765 Caden Springs Suite 958\nMohammedchester, NC 67187', 'Numquam numquam quia et voluptatem rerum ullam ipsam.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (19, '0242 Esmeralda Mill\nNorth Matteoborough, MI 16807-7501', 'Est maiores sunt itaque ut commodi.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (20, '049 Hodkiewicz Lodge Suite 824\nAlishashire, PA 96352-7001', 'Repudiandae eos sed ex eum voluptatem consectetur.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (21, '429 Block Valley\nFreidachester, IL 14507', 'Est et iusto aut natus.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (22, '611 Shana View Apt. 845\nNorth Edgardoberg, SC 20521', 'Blanditiis similique eius et facere.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (23, '0678 Elissa Harbor Apt. 554\nEast Mireille, MN 78996', 'Doloremque quis eum quia voluptas eos.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (24, '07235 Derick Rapids\nNew Gayport, KS 30225-9431', 'Qui eum laudantium eveniet quod id tempore.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (25, '88078 O\'Keefe Pike\nKuhicfurt, VA 56105', 'Illo qui quo rerum fugiat debitis enim.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (26, '1171 Luisa Locks Suite 755\nGenovevamouth, GA 87587', 'Alias est voluptatem voluptatem ut aperiam.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (27, '267 Cristopher Haven\nSouth Jermaine, NC 86465-7413', 'Illum commodi aut consequatur fuga laborum.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (28, '009 Mraz Locks Apt. 610\nFletatown, NH 37329', 'Error eum quasi totam necessitatibus consequatur.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (29, '611 Jenkins Loop Apt. 626\nPort Ari, WV 26686-7762', 'Quam rerum qui fuga sint sit nemo consequatur qui.');
INSERT INTO `address` (`id`, `address`, `detail`) VALUES (30, '0392 Ford Loop Apt. 804\nNorth Ashlynn, AZ 35829-6547', 'Officia et hic placeat ipsam modi.');


#
# TABLE STRUCTURE FOR: address_authors
#

DROP TABLE IF EXISTS `address_authors`;

CREATE TABLE `address_authors` (
  `user_id` int(9) unsigned NOT NULL,
  `address_id` int(9) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (1, 1);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (2, 2);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (3, 3);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (4, 4);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (5, 5);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (6, 6);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (7, 7);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (8, 8);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (9, 9);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (10, 10);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (11, 11);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (12, 12);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (13, 13);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (14, 14);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (15, 15);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (16, 16);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (17, 17);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (18, 18);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (19, 19);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (20, 20);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (1, 21);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (2, 22);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (3, 23);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (4, 24);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (5, 25);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (6, 26);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (7, 27);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (8, 28);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (9, 29);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (10, 30);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (11, 1);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (12, 2);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (13, 3);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (14, 4);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (15, 5);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (16, 6);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (17, 7);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (18, 8);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (19, 9);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (20, 10);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (1, 11);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (2, 12);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (3, 13);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (4, 14);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (5, 15);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (6, 16);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (7, 17);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (8, 18);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (9, 19);
INSERT INTO `address_authors` (`user_id`, `address_id`) VALUES (10, 20);


#
# TABLE STRUCTURE FOR: authors
#

DROP TABLE IF EXISTS `authors`;

CREATE TABLE `authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (1, 'Nikita', 'Schneider', 'mcglynn.brielle@example.com', '2018-12-27', '1985-08-21 13:58:14', '2015-09-03 03:32:22');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (2, 'Jamal', 'Brakus', 'tania30@example.net', '1988-11-21', '1984-11-25 13:18:07', '1984-05-24 22:10:08');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (3, 'Lawson', 'Berge', 'jerome24@example.org', '1974-06-29', '2008-11-02 03:43:52', '1979-06-01 21:01:46');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (4, 'Randall', 'Farrell', 'schuyler36@example.com', '1976-06-04', '2002-09-03 22:24:08', '2015-09-14 21:16:12');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (5, 'Oren', 'Green', 'lambert.bogisich@example.net', '2004-07-31', '1971-03-16 21:03:28', '1976-01-25 14:01:43');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (6, 'Edwin', 'Wyman', 'sidney53@example.net', '2014-12-01', '2007-07-15 23:08:56', '1980-12-26 05:11:47');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (7, 'Nicola', 'Balistreri', 'bertrand.crona@example.net', '1985-12-20', '1994-11-26 01:58:49', '1978-05-21 05:26:36');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (8, 'Mohamed', 'Schuppe', 'moriah.halvorson@example.org', '1979-07-08', '2009-12-09 10:52:13', '1973-08-12 16:53:48');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (9, 'Carter', 'Murphy', 'estefania.crona@example.org', '1995-10-01', '1970-06-05 20:21:27', '1987-12-30 18:29:52');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (10, 'Mac', 'Keeling', 'genesis19@example.net', '1973-03-04', '1983-06-26 14:11:07', '1991-07-05 21:34:18');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (11, 'Houston', 'Hartmann', 'reuben.lubowitz@example.com', '2017-02-26', '2011-12-17 22:40:57', '1971-09-27 19:53:38');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (12, 'Charity', 'Kuphal', 'dejon.stiedemann@example.org', '1989-06-23', '2010-06-24 22:22:39', '1980-06-13 10:55:27');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (13, 'Joey', 'Ratke', 'roberts.halie@example.net', '1974-10-21', '2002-03-09 07:02:36', '2000-06-22 12:10:08');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (14, 'Maritza', 'Koepp', 'robin23@example.org', '2011-06-25', '2000-03-16 21:35:41', '2015-11-25 08:44:18');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (15, 'Emile', 'Schowalter', 'hauck.mckenzie@example.org', '2013-04-12', '2017-10-22 02:29:37', '1993-07-17 12:23:43');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (16, 'Katelynn', 'Shields', 'hickle.dejuan@example.net', '1979-01-02', '1986-03-02 18:02:22', '1971-04-23 07:30:21');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (17, 'Ada', 'Bayer', 'helene.o\'connell@example.com', '2017-03-08', '2002-11-20 15:55:50', '2009-06-18 07:16:29');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (18, 'Kenyon', 'Lehner', 'vsanford@example.com', '2013-03-30', '1990-02-03 02:53:31', '2003-03-27 13:19:57');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (19, 'Emelia', 'Kessler', 'pjones@example.org', '1977-07-13', '2000-05-15 12:22:43', '2011-10-31 20:09:37');
INSERT INTO `authors` (`id`, `first_name`, `last_name`, `email`, `birthdate`, `created_at`, `updated_at`) VALUES (20, 'Chelsey', 'Cronin', 'bhomenick@example.net', '2000-12-20', '1995-07-09 05:57:41', '2015-05-05 15:18:58');


#
# TABLE STRUCTURE FOR: phone
#

DROP TABLE IF EXISTS `phone`;

CREATE TABLE `phone` (
  `user_id` int(9) unsigned NOT NULL,
  `phone_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `phone` (`user_id`, `phone_number`) VALUES (1, '(277)085-1664x8469');
INSERT INTO `phone` (`user_id`, `phone_number`) VALUES (2, '950-686-5454x26247');
INSERT INTO `phone` (`user_id`, `phone_number`) VALUES (3, '06722906747');
INSERT INTO `phone` (`user_id`, `phone_number`) VALUES (4, '(212)990-0738');
INSERT INTO `phone` (`user_id`, `phone_number`) VALUES (5, '+16(4)7417186739');


#
# TABLE STRUCTURE FOR: posts
#

DROP TABLE IF EXISTS `posts`;

CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (1, 1, 'Consequatur id voluptatem cum rem reiciendis soluta tempore.', 'Vel eaque ducimus ut possimus. Consequuntur neque qui soluta id. Delectus eaque est magni id.', 'Quasi atque porro et iusto fuga. Eos quia est ut. Dolores est consequatur recusandae assumenda unde.\nRerum dolores laudantium minima impedit non. Sint qui exercitationem dolorem voluptas et rerum.', '1984-08-02');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (2, 2, 'Sit sunt animi saepe voluptatibus.', 'Pariatur eligendi distinctio aut. Saepe voluptas aperiam exercitationem possimus non velit corrupti ad. Consequuntur eius distinctio laboriosam quae accusamus quaerat quas voluptatibus. Nobis assumenda nemo mollitia quisquam placeat.', 'Perferendis tempore odit soluta voluptas. Quia sed autem in in. Et quis amet ut qui hic aut excepturi quod.', '2007-08-17');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (3, 3, 'Quisquam est dolores tenetur voluptatem.', 'Labore nemo cupiditate dolor voluptatum saepe doloremque dolores. Ex doloremque esse omnis facilis nihil suscipit. Adipisci nihil enim sit.', 'Dolor dignissimos fugiat sed minima nihil. Nam sunt minima debitis possimus. Quibusdam quidem omnis debitis voluptates et. Deleniti facere quibusdam dolor inventore dolor ad.', '1998-09-09');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (4, 4, 'Velit sint accusantium ratione iste vel quam et.', 'Cupiditate vel ratione repellendus doloremque mollitia quam. Veritatis expedita quis qui similique molestias quidem beatae. Id veniam numquam dolorum fuga. Libero harum provident quaerat eos. Odit aliquid quis necessitatibus dolores.', 'Eveniet eius laborum neque ipsa inventore id aut. Sint velit et ut libero accusantium. Possimus ullam alias omnis beatae voluptatem.', '1970-11-03');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (5, 5, 'Fuga voluptatem vitae accusamus ut molestiae sit.', 'Id vero et rerum molestias iure voluptatem. Soluta est quam itaque non quam. Est iure repudiandae rerum sunt et omnis dignissimos error.', 'Nam impedit aut ut sunt minus suscipit. In id est id iste. Recusandae hic cupiditate aut dicta exercitationem voluptatibus sit et.', '2004-11-26');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (6, 6, 'Sint deserunt et optio.', 'Amet quae aut non voluptas ut. Voluptatem et consequatur voluptas nihil perspiciatis. Maiores saepe rerum facere eos. Quam quos doloremque et quia nihil rem ut ea.', 'Et rerum quis ea id tenetur. Modi velit quod iusto velit similique et. Saepe omnis atque quis reprehenderit totam. Aspernatur velit amet repellat tenetur qui est velit.', '2004-12-01');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (7, 7, 'Est iusto ipsum in.', 'Aut qui in ullam ut ea magni. Ea omnis sunt possimus odio rerum et. Voluptas similique autem in quos nam voluptatem voluptatem. Quasi minus non velit dolores cupiditate. Explicabo nam dignissimos in cum ut aut ratione.', 'Quia non iusto consequuntur expedita cupiditate. Ipsum earum veniam qui rem. Velit qui quidem quod sit commodi. Aut exercitationem nostrum eligendi esse ut.', '2005-06-27');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (8, 8, 'Sed accusantium aut laudantium modi odit.', 'Commodi mollitia ea consectetur dignissimos. Earum itaque molestiae molestiae illo magni placeat. Et tempora nihil sit provident ut. Non delectus exercitationem natus libero. Ea a non eligendi delectus quod ab.', 'Veniam est nesciunt qui voluptas minus perspiciatis veritatis. Aliquid magni ut est quasi. Voluptatem deleniti odit qui quidem et.', '2012-01-25');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (9, 9, 'Fuga in sequi architecto.', 'Voluptates ex quis minima qui ea iusto libero earum. Iste eum eos sint aliquam odio. Iure eos quos dolorem libero expedita dolorem eos.', 'Recusandae sit itaque labore quis facilis quidem. Similique id assumenda delectus non alias. Saepe qui ut et error laudantium magni fugiat.', '1977-12-31');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (10, 10, 'Exercitationem dolores est recusandae ipsa.', 'Quidem qui aut ut iusto vel ipsa. Rerum expedita nemo quae doloribus sequi numquam. Ab exercitationem possimus amet ullam. Et unde error nostrum facilis.', 'Eos sint aperiam ea eius temporibus. Dolores sed dolore ut sed distinctio ut voluptas. Voluptates a eaque qui tempore illo aut aliquid. Sit dolor eum ut sit eos occaecati.', '1987-06-10');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (11, 11, 'Rem harum sunt ut porro qui voluptatem corporis.', 'Aperiam nihil ullam fuga ut. Rem quia atque et et ducimus harum sunt. Delectus mollitia eos earum. Consequatur dolor facere provident libero.', 'Reprehenderit earum mollitia sapiente. Quaerat voluptatem fuga tenetur excepturi hic inventore. Praesentium quia error et rerum minus.', '2002-07-24');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (12, 12, 'Natus qui voluptas similique rerum temporibus.', 'Exercitationem rerum dolore vitae accusamus quaerat omnis eum. Ut tempore voluptatem ipsam omnis expedita.', 'Fuga laborum quo id fugiat. Consequatur et harum debitis non quidem. Cum nesciunt sunt architecto corporis dolor voluptas inventore.', '2008-08-20');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (13, 13, 'Veniam sed eveniet iure non.', 'Incidunt ab commodi repellat impedit ut dolor. Assumenda illo excepturi eius quam et sit placeat.', 'Et aut aut excepturi et omnis porro voluptate et. Ut tempora non neque quasi aut et. Doloremque dolores voluptatibus natus. Ipsum voluptatem velit error voluptatem.', '2008-02-01');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (14, 14, 'Nihil sint fuga voluptas ut sint itaque.', 'Sit et accusamus rerum possimus qui voluptatem magni dolore. Consequatur occaecati maxime dicta ut. Eligendi rerum quasi velit atque non. Qui eveniet voluptatum facere consectetur sequi.', 'Debitis commodi ut nulla assumenda quos. Consequatur veniam rem amet quas natus occaecati. Tempora quia debitis est doloremque sit dolorem.', '1985-07-06');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (15, 15, 'Dolores accusamus at libero inventore molestias ea laudantium debitis.', 'Voluptas ipsa enim illo sit corrupti nostrum. Magni et voluptatem hic odio. Sint fuga non omnis sint et.', 'Voluptatum omnis sed molestiae veritatis omnis ullam. Ut ea reiciendis quos iure sed. Iusto voluptas numquam repudiandae ea natus dignissimos.', '1987-08-21');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (16, 16, 'Ipsam ut quis quam quia.', 'Recusandae et est fugit et. Eos fuga eum tenetur explicabo molestiae. Eius voluptatem qui repellendus.', 'Et qui qui veritatis nesciunt. Ut itaque nobis laudantium quaerat sit aut. Nihil qui veritatis tempore hic.', '2009-07-01');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (17, 17, 'Necessitatibus sapiente aliquid quia architecto laudantium temporibus rerum laudantium.', 'Sunt necessitatibus at libero et facere. Autem nihil laudantium consequatur nemo. Autem adipisci quis aliquid autem voluptas saepe ipsa repudiandae.', 'A maxime quod porro soluta molestias nemo. Necessitatibus libero voluptatem omnis et dolorum aut. Iure et expedita omnis voluptatem amet voluptate.', '1983-02-25');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (18, 18, 'Et facere autem veniam rem velit animi.', 'Numquam tempore assumenda quaerat sequi quasi et nobis. Eum a quia et et. Hic earum voluptatibus sequi laudantium. Quod ratione impedit quia qui explicabo repellat. Cumque id atque saepe repellat qui.', 'Vero fuga quo soluta quia saepe. Corrupti itaque et nulla quas non modi. Perferendis possimus et eligendi quis quos perferendis.', '1996-10-10');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (19, 19, 'Eos blanditiis aut doloremque cum pariatur.', 'Laborum odit provident perferendis eaque possimus. Vel dicta ex voluptas ea. Officia laborum quasi ducimus qui et.', 'Dicta quibusdam provident iste qui aut itaque accusamus. Soluta recusandae sit rem autem et enim nostrum.', '2007-10-13');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (20, 20, 'Voluptatem est incidunt velit dolorum in vitae.', 'Incidunt aut distinctio vel cumque in minima et at. Quia rerum qui eaque sit temporibus. Beatae dolores quibusdam aut repellat alias.', 'Reprehenderit nihil rem deleniti. Dolores velit ex et id.', '1977-04-03');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (21, 1, 'Fuga est ut placeat expedita est doloremque.', 'Id aut rerum modi perferendis. Nam earum iusto impedit aliquid. Ea non cum reiciendis.', 'Perferendis facilis dolorem provident inventore. Non et quisquam id et. Aut fugit suscipit et tempore minima commodi atque molestiae. Voluptatum cupiditate maiores est nihil cum officiis est nobis.', '2018-08-13');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (22, 2, 'Officiis impedit amet veritatis.', 'Architecto sunt deserunt rerum earum esse quas a. Ut repudiandae et rem. Sed dolore reprehenderit voluptatum voluptatem tempora sequi sit repellendus.', 'Iure deserunt at unde et eaque. Molestiae fugit aut et a ut aut officia. Reiciendis omnis assumenda saepe a. Perferendis voluptatum quae vel voluptas porro quisquam voluptatem sit.', '1983-07-23');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (23, 3, 'Hic non commodi quia optio ratione aut.', 'Tenetur molestias qui adipisci labore vel vel. Enim inventore mollitia dolorum quia ut dolores neque magni. Cumque quae ut illum qui. Et sapiente voluptas ipsa et dignissimos.', 'Maiores omnis cumque dolorem ea. Et hic excepturi non velit nostrum quisquam. Velit consequatur quia et repellat fuga aperiam. Qui aut cumque ducimus error voluptatem.', '2012-10-28');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (24, 4, 'Molestiae qui excepturi non.', 'Iure sequi deserunt unde consequatur modi. Omnis eius officiis iusto inventore illum laudantium. Non eaque quidem maiores dolor voluptatem et ullam.', 'Nulla est sunt dolorum omnis temporibus. Expedita amet minus voluptates et. Aut dolores soluta sint quasi maiores.', '2005-09-06');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (25, 5, 'Quis earum est omnis est.', 'Odit et aliquid doloribus quo. Quo illo cumque et. Veritatis animi natus dolorem quasi eligendi distinctio. Maxime quaerat sit a velit.', 'Natus quasi et ad ipsum. Minus dolorum suscipit voluptatem sunt molestiae ipsa. Maxime est est eum vel rerum.', '1998-10-28');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (26, 6, 'Est omnis neque magni id.', 'Tenetur et non minima et alias repellat. Praesentium incidunt odit omnis fugiat accusantium quia. Nesciunt tenetur suscipit nihil dolorem maxime. Sequi earum deleniti est doloremque sint molestiae.', 'Porro aut nobis similique dicta rerum. In saepe aliquid consequatur.', '2001-10-26');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (27, 7, 'Nemo et voluptatem unde est molestias dolores eaque.', 'Accusantium quidem assumenda doloremque labore sint. Exercitationem consectetur quia necessitatibus maiores tempore nihil. Earum quisquam autem doloribus. Odit magnam quis autem aut.', 'Ut ut nostrum enim eos. Odio dolor nihil iusto id est quas nemo. Sit explicabo sed corrupti a explicabo id. Recusandae minus possimus tenetur aliquam dolores qui.', '2002-09-17');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (28, 8, 'Libero laborum voluptas eum rerum.', 'Sit autem reiciendis totam dolores porro. Architecto quos illo dicta est in voluptatibus illum. Quae quia aut et illum hic fugit quibusdam. Saepe optio voluptatem illum accusantium ea iure sunt.', 'Quia ducimus quis in illum. Voluptas quis voluptas porro quis et iste.', '1973-03-23');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (29, 9, 'Perspiciatis quisquam ut ut aut rem in ad.', 'Quisquam facilis nobis ut ut. Earum fuga aut quia eos dicta. Id architecto quae sit et.', 'Quia ipsum nesciunt vel. Est autem quisquam sit atque in cumque. Laborum ullam qui deleniti dignissimos deserunt voluptatem.', '2009-08-04');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (30, 10, 'Voluptas soluta adipisci aut alias rerum sunt voluptatem.', 'Nostrum nisi ipsa quo possimus et dicta enim. Reiciendis non doloremque dolores similique tempore eos facere. Et voluptatem exercitationem adipisci minus. Saepe vitae magnam aut eveniet.', 'Aut voluptates rerum et et et hic ipsam. Eum repellat aut assumenda vel et accusantium beatae. Sit excepturi consectetur dolores eos ut. Impedit consequatur placeat quis magni aut facilis.', '1971-12-28');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (31, 11, 'Omnis dolores vero libero nisi ex.', 'Velit iusto sed deleniti quia odio et sit. Repudiandae sed deleniti placeat. Dolor qui sapiente ut incidunt et architecto eligendi.', 'Consequatur neque qui tenetur suscipit. Iusto molestias sed vitae vero deserunt rerum. Vitae est odio occaecati. Et aut fugiat vero maiores omnis.', '1980-02-09');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (32, 12, 'Est perspiciatis est reprehenderit dolores aut non ut.', 'Iusto unde reiciendis omnis quidem ipsam quia ab. Ipsum et enim natus expedita eius. Eum quas esse ea perferendis quis.', 'Exercitationem dignissimos eligendi cumque quod cumque nisi eos. Doloribus et repellat alias voluptas. Illum fuga sunt esse. Ut odio fugit quae odit.', '1990-02-27');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (33, 13, 'Dolorem tempore eos repellendus.', 'Non cum voluptas nihil optio. Qui a qui modi aperiam. Ipsa praesentium expedita debitis fugiat et.', 'Ipsa unde nesciunt quibusdam ea voluptas. Est fuga tenetur sed vel vel. Iure magnam cum quis excepturi nam.', '2012-08-11');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (34, 14, 'Quae et et molestiae voluptatem soluta hic nostrum.', 'Eveniet et temporibus alias sunt quas. Nemo explicabo voluptate sint tempore quod non. Maiores totam et dicta aut. Qui possimus debitis corporis fugit. Ipsum ut commodi ut incidunt commodi ipsam itaque.', 'Quas eveniet aliquid praesentium et. Provident tenetur et impedit repellat doloremque quisquam. Voluptatem et cupiditate veritatis id sequi consectetur. Et neque odio facilis vitae dolorum id velit.', '2004-09-28');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (35, 15, 'Sunt consectetur enim velit placeat ut et alias.', 'Voluptatem enim voluptatem ex debitis cum error. Quae quisquam repellendus vel mollitia ducimus sed.', 'Sint quia aut nihil voluptatem et sed. Aut esse non sit. Eos est nulla voluptas sed iste esse est. Quaerat dicta dolorum a id.', '2002-12-23');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (36, 16, 'Neque facilis ea qui accusantium consequuntur reiciendis.', 'Reprehenderit quam nemo consectetur velit officia similique voluptas. Nulla reprehenderit voluptas quos impedit. Adipisci labore pariatur possimus eligendi aut non. Dolorum illo occaecati quod dolor ex expedita.', 'Est id soluta autem ut. Ipsam eligendi ut consequuntur saepe totam eius odit.', '1975-01-06');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (37, 17, 'Aut deleniti minus aspernatur alias in voluptas iusto.', 'Est dolorem itaque officia blanditiis. Quasi neque incidunt commodi unde numquam facere consequatur fugit. Omnis porro praesentium sed at possimus et unde.', 'Aut fuga voluptas placeat tempore quae fuga aut. Omnis est et eligendi id quia cumque sit quia. Est est beatae ut porro et facilis sed ad. Temporibus a qui quae atque.', '2019-06-26');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (38, 18, 'Porro ea pariatur maxime placeat ratione neque voluptatum.', 'Voluptas fuga atque quis error molestiae earum itaque ipsam. Sequi et aut inventore velit minima dolor. Et laboriosam rerum saepe autem. Reprehenderit rem ut non voluptates quos fugit.', 'Quo id saepe quaerat tempore est voluptas autem. Voluptatem minus nisi eveniet inventore enim. Sed eveniet et tenetur quia. Voluptatem quas rerum tempore asperiores.', '1987-05-26');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (39, 19, 'Sint voluptatum omnis corrupti ut et tempora.', 'Et voluptatum quae hic quaerat architecto. Voluptatem et ut nihil facere est repudiandae ipsa doloremque. Qui voluptatum omnis quia est.', 'Qui eius culpa fugiat ut. Autem aut voluptatem est vel voluptatem placeat. Impedit quia est quos provident harum. Qui et omnis delectus quod magni necessitatibus.', '2004-02-01');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (40, 20, 'Ut voluptatem quia cumque libero reiciendis sed.', 'Debitis consequatur quis corrupti nihil rerum ut fugit. Qui ut aut consequatur minima repudiandae. Maxime sint non autem. Amet porro officiis a.', 'Non nostrum excepturi iure voluptatum nostrum porro. Pariatur incidunt autem fugit id non. Necessitatibus rerum qui tempore nulla doloribus consequatur commodi repellat.', '1991-07-24');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (41, 1, 'Quos itaque beatae velit qui.', 'Quod nihil perspiciatis dolores unde. Quam magni non enim. Iusto possimus quo aut et.', 'Ex voluptatem et laudantium voluptas quaerat dicta esse. Voluptate minima quas impedit et. Voluptatem incidunt voluptates quaerat consequuntur laudantium.', '2000-02-12');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (42, 2, 'Dolore maxime sed non.', 'Nemo ut modi quibusdam distinctio dignissimos qui quam. Magni id tempora voluptas accusamus. Qui sit nulla accusantium similique.', 'Ea fuga ut omnis reiciendis exercitationem atque omnis. Asperiores in temporibus quia vero nulla. Ducimus rerum excepturi repellat et impedit.', '2010-02-17');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (43, 3, 'Unde occaecati dolorem veniam voluptatum.', 'Quasi amet sunt placeat. Impedit aliquid aspernatur dolore expedita est. Autem voluptatem sint molestias illo corporis deleniti ipsum hic.', 'Vel aut voluptatem molestias reiciendis labore. Iste autem in ea omnis. Illum sunt quae est.\nVoluptas ad inventore earum ut nobis pariatur ut ratione. Perferendis consequatur ut minima.', '2000-06-03');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (44, 4, 'Magnam ut eius asperiores vero nam ea porro doloremque.', 'Vel velit consequatur quidem consequatur quos cum voluptas exercitationem. Mollitia et eos mollitia dicta est delectus.', 'Doloribus impedit voluptates magni sit non. Nihil illum cumque sapiente ut sequi esse dignissimos. Nostrum ipsa autem ut. Occaecati aut architecto ex est quae dolorem. Sit minus qui sint nam.', '2013-08-14');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (45, 5, 'Nesciunt illo vel dolore dolorum quis quaerat qui.', 'Tempore facere explicabo dolore doloremque enim dolore eum non. Cumque iure minima autem aliquid vitae unde harum. Suscipit nostrum officia aut perferendis. Libero ipsa quod illum totam.', 'Atque repudiandae porro vitae minus. Rem velit eveniet id qui nulla. Ratione laboriosam similique voluptas molestiae tenetur porro. In et esse cum aut corrupti.', '1986-04-16');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (46, 6, 'Iste nihil officiis qui non quas accusantium aut autem.', 'Velit est maiores vitae nesciunt dolor adipisci. Cum ut doloribus aut quia aperiam nesciunt aut. Temporibus inventore quae ut est.', 'Magnam repudiandae quis tempore. Sed possimus deleniti et assumenda animi quis. Velit sapiente ut excepturi sunt et deserunt sunt earum.', '1975-04-25');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (47, 7, 'Saepe adipisci nemo explicabo voluptatem.', 'Vel non rerum et aliquam dolorem velit. Doloribus distinctio amet reiciendis explicabo ipsa nobis voluptatem. Ipsa id aut culpa suscipit sunt.', 'Est mollitia exercitationem iusto praesentium blanditiis aliquam autem. Corporis id temporibus tempora laboriosam dolore rem. Totam dolore aut nihil pariatur.', '1972-09-20');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (48, 8, 'Voluptas totam quod vitae ex magni.', 'Sint facere numquam incidunt. Dolorem deserunt ipsa perferendis ut error libero laudantium. Dicta numquam porro vitae iure quia rerum. Necessitatibus repudiandae occaecati labore inventore et dolor cum.', 'Suscipit nihil ut eius eos modi. Aliquam aspernatur eos mollitia natus. Dicta iste rerum culpa quis sed accusamus nisi. Sint quia illum consequatur voluptates explicabo quae.', '1970-11-08');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (49, 9, 'Perferendis nemo accusamus sed rerum rerum ex minus excepturi.', 'Iste et ex voluptatem dolorem a. Libero corrupti possimus dolore ut est aut atque quidem. Maiores dolor qui omnis.', 'Nulla iusto sed omnis in. Qui neque aliquid labore eligendi. Voluptas labore aut ut et aspernatur aliquid placeat.', '2006-07-02');
INSERT INTO `posts` (`id`, `author_id`, `title`, `description`, `content`, `date`) VALUES (50, 10, 'Sunt vitae voluptatem aut architecto laudantium voluptatem voluptas earum.', 'Consequatur consequatur nam voluptatibus. Rerum amet repellendus sed dolorem ut quaerat officiis. Et doloribus molestiae maiores aut tenetur.', 'Ipsum facere nihil aperiam eligendi. Necessitatibus doloremque sit distinctio cum cupiditate quisquam consequuntur.', '1970-10-24');


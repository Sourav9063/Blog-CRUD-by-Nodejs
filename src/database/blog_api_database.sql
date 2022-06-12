-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2022 at 02:35 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog_api_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `title` varchar(255) NOT NULL,
  `blogid` int(11) NOT NULL,
  `main` text NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`title`, `blogid`, `main`, `create_date`, `user_id`) VALUES
('[value-1]', 2, '[value-2]', '2022-06-10 18:10:56', 1),
('[value-1]', 3, '[value-2]', '2022-06-10 18:11:04', 3),
('[value-1]', 4, '[value-2]', '2022-06-10 18:11:13', 2),
('Blog Title', 5, 'Blog Main', '2022-06-10 21:29:40', 2),
('Blog Title', 6, 'Blog Main2', '2022-06-11 11:59:12', 2),
('Blog Title', 7, 'Blog Main2', '2022-06-11 20:29:44', 2),
('Blog Title', 8, 'Blog Main2', '2022-06-11 20:33:33', 2),
('Blog Title', 9, 'Blog Main2', '2022-06-11 21:41:56', 1),
('sslsl', 10, 'main', '2022-06-11 21:45:20', 9),
('Blog Title', 11, 'Blog Main2', '2022-06-11 21:46:08', 5),
('Blog Title by sourav', 12, 'Blog Main by sourav', '2022-06-12 10:18:10', 11),
('Blog Title by sourav', 15, 'Blog Main by sourav', '2022-06-12 11:29:40', 12),
('mahin new', 18, 'mahin new', '2022-06-12 12:29:54', 14);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `join_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password_hash`, `join_date`) VALUES
(1, 'sourac', '[va1lue-2]', '[value-3]', '2022-06-09 18:00:00'),
(2, '[a]', '[b]2', '[value-3]', '2022-06-09 18:00:00'),
(3, '[value-1]', '[value-2]3', '[value-3]', '2022-06-10 17:51:24'),
(5, 'sourav', 'ass.nx@abc.com', '$2b$10$auAXrToqz0WfZMdp7p2w1e3AAU2L5tvEt9974hkxUfceeEhxHEblG', '2022-06-11 12:02:40'),
(6, 'sourav', 'asadf.nx@abc.com', '$2b$10$FknWn1DSXJi5ZaTyD.fVcO6cFYE0hVKJSj4gtftE25ycBfZTbmv5W', '2022-06-11 12:21:08'),
(9, 'sourav', 'abc@gmail.com', '$2b$10$6xbiZII0K7mzf0Rk1Jm9G.RNfvMOMJU/k3wdguJBHEW9PphVrDDmm', '2022-06-11 20:37:05'),
(10, 'Sourav', 'sourav.ahmed5654@gmail.com', '$2b$10$7pWp0.wsuE0nhAS469z73OtcP4ScIJIAmY/aIqIseBNbmLLPYoD/a', '2022-06-12 10:17:30'),
(11, 'Sourav', 'sourav.ajhmed5654@gmail.com', '$2b$10$EtFpBVZ1bYcIk/oQq.sVKOaHzpuMaekwIs9F7HL6.lMcemZshn5n2', '2022-06-12 10:22:18'),
(12, 'Solomon****', 'sourav.ajhmed5654@gmail.comjadslf', '$2b$10$0COPJqiu7jYCeN1S6vTnseVyxC3iQ6FQxNssTWcjsWUtfXOgew3/m', '2022-06-12 10:23:55'),
(13, 'Sourav', 'aaaa.ajhmed5654@gmail.comjadslf', '$2b$10$zwmNMHrfAg4f2ez30FaELu.z7M3o.KztKnJ25kZJtvXrpfrRdRezW', '2022-06-12 10:56:47'),
(14, 'Mahin2', 'mahin@gmail.com', '$2b$10$QMj.qVKsDIbFuociuYud0OMSM37uu7/ceqfYwW1ZVaEiTlChE8Icq', '2022-06-12 12:03:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`blogid`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `blogid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

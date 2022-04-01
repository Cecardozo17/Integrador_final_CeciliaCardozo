-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2022 a las 14:49:34
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `isadora`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `color` varchar(20) NOT NULL,
  `precio` int(20) NOT NULL,
  `image` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `color`, `precio`, `image`) VALUES
(1, 'Cartera Rina', 'blanco', 2000, 'cxdspuytyhyxywbvsjga'),
(2, 'Cartera Tesi', 'azul', 1900, 'ofvwee5zt621k2tgt0st'),
(3, 'Cartera Night', 'negro', 2000, 'f0sogkf2ksajvjyzn3w0'),
(4, 'Mochila black', 'negro', 4000, 'rs8bbtna2b918yzeswqx'),
(5, 'Mochila white', 'blanco', 5000, 'a4fhv9iiecdhtd9kmlvu'),
(6, 'Reloj vivi', 'negro', 3000, 'mtzy4rcg6gzmplx8s42u'),
(7, 'Billetera', 'blanco', 1900, 'cjumbi8cdholmptoks1j'),
(8, 'Pañuelo', 'negro', 1500, 'aeu0rg4zy0ntavnbwxwu');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD UNIQUE KEY `id` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

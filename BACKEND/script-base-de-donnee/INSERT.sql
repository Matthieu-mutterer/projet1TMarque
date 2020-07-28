/* MUTTERER Matthieu 
insertion des couleur */

INSERT INTO tbCouleur(couleurId, nomCouleur)
VALUES 
(1, 'Rouge'),
(2, 'Blanc'),
(3, 'Noire'), 
(4, 'Jaune'), 
(5, 'Bleu')

/* MUTTERER Matthieu
insertion des noms des vêtements */

INSERT INTO tbNom(nomId, nomVet)
VALUES 
(1, 'Pull The Sad Boy Experiment'),
(2, 'T-shirt The Sad Boy Experiment'),
(3, 'Veste The Sad Boy Experiment')

INSERT INTO tbTaille(tailleId, nomTAil)
VALUES 
(1, 'S'),
(2, 'M'),
(3, 'L')

INSERT INTO tbShirt(shirtId, nomId, tailleId, couleurId, shirtPrix)
VALUES 
(1, '1', '1', '1', '35'),
(2, '1', '1', '2', '35'),
(3, '1', '1', '3', '35'), 
(4, '1', '2', '1', '35'),
(5, '1', '2', '2', '35'),
(6, '1', '2', '3', '35'),
(7, '1', '3', '1', '35'),
(8, '1', '3', '2', '35'),
(9, '1', '3', '3', '35'),
(10, '2', '1', '1', '25'),
(11, '2', '1', '2', '25'),
(12, '2', '1', '3', '25'),
(13, '2', '2', '1', '25'),
(14, '2', '2', '2', '25'),
(15, '2', '2', '3', '25'),
(16, '2', '3', '1', '25'),
(17, '2', '3', '2', '25'),
(18, '2', '3', '3', '25'),
(19, '3', '1', '1', '60'),
(20, '3', '1', '2', '60'),
(21, '3', '1', '3', '60'),
(22, '3', '2', '1', '60'),
(23, '3', '2', '2', '60'),
(24, '3', '2', '3', '60'),
(25, '3', '3', '1', '60'),
(26, '3', '3', '2', '60'),
(27, '3', '3', '3', '60')

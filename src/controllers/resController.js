const Avion = require('../models/avionModel');
const Voyageur = require('../models/voyageurModel');
const Reservation = require('../models/resModel');
const Joi = require('joi');


const shema = Joi.object({
    frais: Joi.number().required(),
    dateDepart: Joi.date().min('now').required(),
    //dateDepart: Joi.string(),
    nom: Joi.string(),
    cin: Joi.string().max(15),
    numPhone: Joi.string().max(15),
    avion: Joi.string().max(10).regex(/^[0-9]+av|AV$/),
});

//function pour prendre tous les listes des reservations
exports.getReservationList = function(req, res){
    Reservation.getAllReservation(function(error, reservation){
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.json(reservation);
        }
    });
};





//function pour prendre une reservation
exports.getReservationId = function(req, res){
    Reservation.getIdReservation(req.params.id, function(error, reservation){
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.json(reservation);
        }
    });
};






//function pour ajouter une reservation
exports.storeReservation = function(req, res){  
    const result = shema.validate(req.body);
    if (result.error) {
        res.sendStatus(422).json({
            message: 'Données entrées non valide',
            data: req.body,
        });
    } else {
        
        res.json({status: true, message: "mandeha store reservation io"})
        //logique de l'enregistrement d'une reservation


    }
};





//function pour la mise à jour d'un voyageur
exports.updateVoyageur = function(req, res){
    const result = shema.validate(req.body);
    if (result.error) {
        res.sendStatus(422).json({
            message:'Données entrées non valide',
            data: req.body,
        });
    } else {

        res.json({message: "mandeha update reservation io"})
        //logique de la mise a jour d'une reservation

        
    }
};




//function pour la suppression d'une reservation
exports.deleteReservation = function(req, res){
    Reservation.delReservation(req.params.id, function(error, reservation){
        if (error) {
            console.log(error);
            res.json({status: false, message: "Erreur lors de la suppression d'une reservation"});
        } else {
            res.json({status: true, message: "Suppression d'une reservation reussie!"});
        }
    });
};
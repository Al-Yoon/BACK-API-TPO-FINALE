const {Ticket, Project, User} = require('../db/db');
const tickets = require('../db/models/Ticket');

const ticketsAtributes = ['id','descripcion','fecha','monto','imageUrl'];

const ticketsInclude = [{
    model: Project,
    as: 'project',
    attributes: ['id','nombre','fecha','usuarioId']
}];

const getTickets = async ()=> await Ticket.findAll(); 

const getTicketById = async (id)=> await Ticket.findByPk(id,{
    atrtributes: ticketsAtributes,
    include: ticketsInclude}); 

const createTicket = async (ticket)=> await Ticket.create(ticket); 

const updateTicket = async ()=> await Ticket.updateTicket(id);

const deleteTicket = async ()=> await Ticket.deleteTicket(id);

const getTicketsByProject = async (id) => await Ticket.findAll(
    {
        where: {
        projectId: id
        }
    }
);

const getTicketsByUserId = async(id) => await Ticket.findAll(
    {
        where: {
            userId: id
        },
    }
);

module.exports ={
    getTickets,
    getTicketById,
    createTicket,
    getTicketsByProject,
    getTicketsByUserId,
    updateTicket,
    deleteTicket
}
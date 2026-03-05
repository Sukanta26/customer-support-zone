import TicketsCard from "./TicketsCard";

const Tickets = ({ tickets, handleSelectTask }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {tickets.map((ticket, index) => (
                <TicketsCard
                    key={ticket.id}
                    ticket={ticket}
                    serial={index + 1}
                    handleSelectTask={handleSelectTask}
                />
            ))}

        </div>
    );
};

export default Tickets;
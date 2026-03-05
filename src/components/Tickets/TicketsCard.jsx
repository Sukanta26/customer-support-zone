const TicketsCard = ({ ticket, serial, handleSelectTask }) => {

    const priorityColor =
        ticket.priority === "High"
            ? "text-red-500"
            : ticket.priority === "Medium"
                ? "text-orange-500"
                : "text-green-500";

    const statusColor =
        ticket.status === "Open"
            ? "text-green-500"
            : ticket.status === "In Progress"
                ? "text-orange-500"
                : "text-gray-500";

    return (
        <div
            onClick={() => handleSelectTask(ticket)}
            className="p-4 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg transition"
        >
            {/* Top */}
            <div className="flex justify-between">
                <h2 className="font-bold text-lg">{ticket.title}</h2>
                <span className={`font-semibold ${statusColor}`}>
                    {ticket.status}
                </span>
            </div>

            {/* Description */}
            <p className="mt-2 text-gray-600">
                {ticket.description}
            </p>

            {/* Bottom */}
            <div className="flex justify-between mt-4 text-sm">
                <div>
                    <p>#{serial}</p>
                    <p className={`font-semibold ${priorityColor}`}>
                        {ticket.priority}
                    </p>
                </div>

                <div className="text-right">
                    <p>{ticket.customer}</p>
                    <p>{ticket.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketsCard;
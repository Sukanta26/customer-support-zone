const TicketsCard = ({ ticket, serial, handleSelectTask }) => {

    // Background color according to status
    const statusBgColor =
        ticket.status === "Open"
            ? "bg-green-300"
            : ticket.status === "In Progress"
                ? "bg-yellow-100"
                : "bg-gray-300"; // Resolved



    // Priority Text Color Only
    const priorityTextColor =
        ticket.priority === "HIGH PRIORITY"
            ? "text-red-500"
            : ticket.priority === "MEDIUM PRIORITY"
                ? "text-yellow-500"
                : "text-green-500";




    return (
        <div
            onClick={() => handleSelectTask(ticket)}
            className="p-4 bg-white shadow rounded-lg cursor-pointer hover:shadow-lg transition"
        >
            {/* Top */}
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-lg">{ticket.title}</h2>

                {/* Status Box */}
                <span className={`font-semibold px-2 py-1 rounded-full ${statusBgColor} text-black`}>
                    {ticket.status}
                </span>
            </div>

            {/* Description */}
            <p className="mt-2 text-gray-600">
                {ticket.description}
            </p>

            {/* Bottom */}
            <div className="flex justify-between mt-4 text-sm ">
                <div className="flex justify-between gap-2">
                    <p>#00{serial}</p>
                    <p className={`font-semibold ${priorityTextColor}`}>
                        {ticket.priority}
                    </p>
                </div>

                <div className="text-gray-600 flex justify-between gap-2">
                    <p>{ticket.customer}</p>
                    <p>{ticket.createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketsCard;
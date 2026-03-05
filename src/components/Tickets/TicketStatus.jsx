const TicketStatus = ({
    selectedTasks,
    resolvedHistory,
    handleComplete,
    handleClearHistory
}) => {

    return (
        <div className="p-4 rounded-xl shadow-md h-fit">
            <h3 className="font-semibold my-2 text-center">In Progress</h3>



            {/* In Progress */}
            <div className="bg-white">


                {selectedTasks.length === 0 && (
                    <p className="text-gray-400 text-sm text-center">Select a ticket to add to Task Status</p>
                )}

                {selectedTasks.map(ticket => (
                    <div key={ticket.id} className="bg-white p-3 mb-3 rounded-lg shadow-sm">
                        <p className="font-medium">{ticket.title}</p>

                        <button
                            onClick={() => handleComplete(ticket.id)}
                            className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                            Complete
                        </button>
                    </div>
                ))}
            </div>

            {/* Resolved */}
            <div className="mt-6">
                <h3 className="font-semibold mb-2 text-center">Resolved History</h3>

                {resolvedHistory.map(ticket => (
                    <div key={ticket.id} className="bg-gray-200 p-2 mb-2 rounded-md text-sm">
                        {ticket.title} - {ticket.completedDate}
                    </div>
                ))}

                {resolvedHistory.length > 0 && (
                    <button
                        onClick={handleClearHistory}
                        className="mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                        Clear History
                    </button>
                )}
            </div>

        </div>
    );
};

export default TicketStatus;
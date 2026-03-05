import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Tickets from "./components/Tickets/Tickets";
import TicketStatus from "./components/Tickets/TicketStatus";
import Footer from "./components/Footer/Footer";

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [resolvedHistory, setResolvedHistory] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then(res => res.json())
      .then(data => setTickets(data));
  }, []);

  // Select Card
  const handleSelectTask = (ticket) => {
    if (ticket.status !== "Open") return;

    const updatedTickets = tickets.map(t =>
      t.id === ticket.id
        ? { ...t, status: "In Progress" }
        : t
    );

    setTickets(updatedTickets);
    setSelectedTasks([...selectedTasks, { ...ticket, status: "In Progress" }]);
  };

  // Complete Task
  const handleComplete = (id) => {
    const confirmComplete = window.confirm("Complete this task?");
    if (!confirmComplete) return;

    const today = new Date().toLocaleDateString();

    const updatedTickets = tickets.map(t =>
      t.id === id
        ? { ...t, status: "Resolved" }
        : t
    );

    setTickets(updatedTickets);

    const completedTask = selectedTasks.find(t => t.id === id);

    setResolvedHistory([
      ...resolvedHistory,
      { ...completedTask, completedDate: today }
    ]);

    setSelectedTasks(selectedTasks.filter(t => t.id !== id));
  };

  const handleClearHistory = () => {
    setResolvedHistory([]);
  };

  const handleAddTicket = () => {
    const title = prompt("Enter Ticket Title:");
    if (!title) return;

    const newTicket = {
      id: tickets.length + 1,
      title,
      description: "New Task",
      customer: "New Customer",
      priority: "Low",
      status: "Open",
      createdAt: new Date().toISOString().split("T")[0]
    };

    setTickets([...tickets, newTicket]);
  };

  const inProgress = tickets.filter(t => t.status === "In Progress").length;
  const resolved = tickets.filter(t => t.status === "Resolved").length;

  return (
    <>
      <Navbar handleAddTicket={handleAddTicket}> </Navbar>


      <div className="bg-gray-100 py-10">
        <Banner inProgress={inProgress} resolved={resolved} ></Banner>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4 text-gray-600">Customer Tickets</h2>
            <Tickets
              tickets={tickets}
              handleSelectTask={handleSelectTask}
            />
          </div>

          <div className="w-full lg:w-[350px]">
            <h2 className="text-xl font-bold mb-4 text-gray-600">Task Status</h2>
            <TicketStatus
              selectedTasks={selectedTasks}
              resolvedHistory={resolvedHistory}
              handleComplete={handleComplete}
              handleClearHistory={handleClearHistory}
            ></TicketStatus>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fireDB } from "./../../../../Firebase/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./Earning.css"; // Import the CSS file

const EarningsGraph = () => {
  const [earningsData, setEarningsData] = useState([]);

  useEffect(() => {
    const fetchCompletedRides = async () => {
      try {
        const ridesRef = collection(fireDB, "rides");
        const completedRidesQuery = query(
          ridesRef,
          where("rideStatus", "==", "Completed")
        );
        const querySnapshot = await getDocs(completedRidesQuery);

        const rides = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          rides.push({
            fare: data.fare,
            rideDate: data.rideDate,
          });
        });

        const processedData = processEarningsData(rides);
        setEarningsData(processedData);
      } catch (error) {
        console.error("Error fetching completed rides:", error);
      }
    };

    fetchCompletedRides();
  }, []);

  const processEarningsData = (rides) => {
    const earningsByDate = {};

    rides.forEach((ride) => {
      const date = new Date(ride.rideDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });

      if (!earningsByDate[date]) {
        earningsByDate[date] = 0;
      }

      earningsByDate[date] += ride.fare;
    });

    return Object.entries(earningsByDate).map(([date, totalEarnings]) => ({
      date,
      totalEarnings,
    }));
  };

  return (
    <div className="graphContainer"> {/* Apply container class */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={earningsData} className="lineChart">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" className="axis" />
          <YAxis className="axis" />
          <Tooltip className="tooltip" />
          <Line
            type="monotone"
            dataKey="totalEarnings"
            stroke="#8884d8"
            className="line"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsGraph;

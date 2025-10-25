import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { fireDB } from './../Firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, where } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { startOfDay, startOfMonth, startOfYear, endOfDay, endOfMonth, endOfYear, isWithinInterval } from 'date-fns'; // Import date-fns functions


const MyState = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    
    const [surgePrices, setSurgePrices] = useState([]);


    const [totalFareDaily, setTotalFareDaily] = useState(0);
    const [totalFareMonthly, setTotalFareMonthly] = useState(0);
    const [totalFareYearly, setTotalFareYearly] = useState(0);

    // Example function to set current user
    const loggedinUser = () => {
        const loginUser = localStorage.getItem("adminDetails");
        if (loginUser) {
            const user = JSON.parse(loginUser);
            setCurrentUser(user); // Set the full user data to currentUser state
            console.log(currentUser);
        } else {
            setCurrentUser(null);
        }
    };

    useEffect(() => {
        console.log("Current user updated:", currentUser);
    }, [currentUser]);


    useEffect(() => {
        loggedinUser();
    }, []);


    // Get Products Function
    const getAdmin = async (email, password) => {
        try {
            const adminRef = collection(fireDB, 'admins');
            const q = query(adminRef, where("email", "==", email), where("password", "==", password));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const adminDoc = querySnapshot.docs[0]; // Assuming there's only one admin with this email and password
                const adminData = { id: adminDoc.id, ...adminDoc.data() }; // Include the document ID and all fields
                return adminData; // Return full admin data
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    };


    // Logout Function
    const logout = async () => {
        try {
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminDetails'); // Remove the stored admin details
            setCurrentUser(null); // Clear current user state
            console.log("Admin logged out successfully");
            return true;
        } catch (error) {
            console.log('Error logging out: ', error);
            return false;
        }
    };

    // get users
    const fetchUsers = async (role) => {
        try {
            const usersCollection = collection(fireDB, 'users');
            const q = query(usersCollection, where("appStatus", "==", role));
            const usersSnapshot = await getDocs(q);
            const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            return usersList;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    //  Fetch Rides Data Function
    const fetchRides = async () => {
        try {
            const ridesCollection = collection(fireDB, 'rides');
            const ridesSnapshot = await getDocs(ridesCollection);
            return ridesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const fetchCaptains = async () => {
        try {
            const usersCollection = collection(fireDB, 'users');
            const q = query(usersCollection, where("appStatus", "==", "captain"));
            const captainsSnapshot = await getDocs(q);
            return captainsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const fetchCaptainById = async (id) => {
        try {
            const captainDocRef = doc(fireDB, 'users', id);
            const captainDoc = await getDoc(captainDocRef);
            if (captainDoc.exists()) {
                return { id: captainDoc.id, ...captainDoc.data() };
            } else {
                console.log('No such document!');
                return null;
            }
        } catch (error) {
            console.error('Error fetching captain:', error);
            return null;
        }
    };


    // Add Fare Adjustment Function
    const addFareAdjustment = async (fareData) => {
        try {
            const fareCollection = collection(fireDB, 'fareAdjustments');
            await addDoc(fareCollection, fareData);
            return true;
        } catch (error) {
            console.log('Error adding fare adjustment: ', error);
            return false;
        }
    };

    // Fetch Fare Adjustments Function
    const fetchFareAdjustments = async () => {
        try {
            const fareCollection = collection(fireDB, 'fareAdjustments');
            const fareSnapshot = await getDocs(fareCollection);
            return fareSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.log('Error fetching fare adjustments: ', error);
            return [];
        }
    };

    // Edit Fare Adjustment Function
    const editFareAdjustment = async (id, updatedFareData) => {
        try {
            const fareDocRef = doc(fireDB, 'fareAdjustments', id);
            await setDoc(fareDocRef, updatedFareData, { merge: true });
            return true;
        } catch (error) {
            console.log('Error editing fare adjustment: ', error);
            return false;
        }
    };

    // Delete Fare Adjustment Function
    const deleteFareAdjustment = async (id) => {
        try {
            const fareDocRef = doc(fireDB, 'fareAdjustments', id);
            await deleteDoc(fareDocRef);
            return true;
        } catch (error) {
            console.log('Error deleting fare adjustment: ', error);
            return false;
        }
    };


    //save notification
    const saveNotification = async (notificationData) => {
        try {
            const notificationsCollection = collection(fireDB, 'user_notifications');
            await addDoc(notificationsCollection, notificationData);
            console.log("Notification saved successfully");
        } catch (error) {
            console.error("Error saving notification:", error);
        }
    };

    // get all notifications
    const fetchNotifications = async () => {
        try {
            const notificationsCollection = collection(fireDB, 'user_notifications');
            const notificationsSnapshot = await getDocs(notificationsCollection);
            return notificationsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error fetching notifications: ', error);
            return [];
        }
    };

    // Edit Notification Function
    const editNotification = async (id, updatedNotificationData) => {
        try {
            const notificationDocRef = doc(fireDB, 'user_notifications', id);
            await setDoc(notificationDocRef, updatedNotificationData, { merge: true });
            console.log("Notification updated successfully");
            return true;
        } catch (error) {
            console.error('Error updating notification:', error);
            return false;
        }
    };

    // Delete Notification Function
    const deleteNotification = async (id) => {
        try {
            const notificationDocRef = doc(fireDB, 'user_notifications', id);
            await deleteDoc(notificationDocRef);
            toast.success("Notification deleted successfully")
            return true;
        } catch (error) {
            toast.error("Error deleting notification:", error)
            return false;
        }
    };


    // Save Promotion Function
    const savePromotion = async (promotionData) => {
        try {
            const promotionsCollection = collection(fireDB, 'promotions');
            await addDoc(promotionsCollection, promotionData);
            console.log("Promotion saved successfully");
        } catch (error) {
            console.error("Error saving promotion:", error);
        }
    };

    // get all notifications
    const fetchPromotions = async () => {
        try {
            const promotionsCollection = collection(fireDB, 'promotions');
            const promotionsSnapshot = await getDocs(promotionsCollection);
            return promotionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error fetching promotions: ', error);
            return [];
        }
    };

    // Edit Notification Function
    const editPromotions = async (id, updatedPromotionData) => {
        try {
            const promotionDocRef = doc(fireDB, 'promotions', id); // Updated collection name
            await setDoc(promotionDocRef, updatedPromotionData, { merge: true });
            console.log("Promotion updated successfully");
            return true;
        } catch (error) {
            console.error('Error updating promotion:', error);
            return false;
        }
    };

    // Delete Notification Function
    const deletePromotions = async (id) => {
        try {
            const promotionDocRef = doc(fireDB, 'promotions', id);
            await deleteDoc(promotionDocRef);
            toast.success("promotion deleted successfully")
            return true;
        } catch (error) {
            toast.error("Error deleting promotion:", error)
            return false;
        }
    };

    // get captains count
    const fetchCaptainsCount = async () => {
        try {
            const usersCollection = collection(fireDB, 'users');
            const q = query(usersCollection, where("appStatus", "==", "captain"));
            const captainsSnapshot = await getDocs(q);
            return captainsSnapshot.size;
        } catch (error) {
            console.error('Error fetching captains count:', error);
            return 0;
        }
    };

    // Fetch Rides Count by Status Function
    const fetchRidesCountByStatus = async (status) => {
        try {
            const ridesCollection = collection(fireDB, 'rides');
            const q = query(ridesCollection, where("rideStatus", "==", status));
            const ridesSnapshot = await getDocs(q);
            return ridesSnapshot.size;
        } catch (error) {
            console.log('Error fetching rides count by status:', error);
            return 0;
        }
    };


    // Fetch Rides Data Function with Date Range
    const fetchRidesPrice = async (startDate, endDate) => {
        try {
            const ridesCollection = collection(fireDB, 'rides');
            const q = query(
                ridesCollection,
                where("rideDate", ">=", startDate),
                where("rideDate", "<=", endDate)
            );
            const ridesSnapshot = await getDocs(q);
            return ridesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.log(error);
            return [];
        }
    };


    // fetch chats
    const fetchChats = async () => {
        try {
            const chatsCollection = collection(fireDB, 'chats');
            const q = query(chatsCollection, where("chatType", "==", "chatSupport"));
            const chatsSnapshot = await getDocs(q);
            return chatsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error fetching chats: ', error);
            return [];
        }
    };


    // Fetch Messages Function
    const fetchMessages = async (chatId) => {
        try {
            const messagesCollection = collection(fireDB, 'chats', chatId, 'messages');
            const q = query(messagesCollection, orderBy('sent'));
            const messagesSnapshot = await getDocs(q);
            return messagesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error fetching messages: ', error);
            return [];
        }
    };

    // Add Fare Adjustment Function
    const addSurgePrice = async (surgeData) => {
        try {
            const surgeCollection = collection(fireDB, 'surgeAdjustments');
            await addDoc(surgeCollection, surgeData);
            return true;
        } catch (error) {
            console.log('Error adding surge adjustment: ', error);
            return false;
        }
    };

    const updateSurgePrice = async (id, data) => {
        try {
            const docRef = doc(fireDB, 'surgeAdjustments', id);
            await setDoc(docRef, data, { merge: true }); // Merge updates
            setSurgePrices((prev) => prev.map((area) => (area.id === id ? { id, ...data } : area)));
            return true;
        } catch (error) {
            console.error("Error updating surge price: ", error);
            return false;
        }
    };

    const deleteSurgePrice = async (id) => {
        try {
            const docRef = doc(fireDB, 'surgeAdjustments', id);
            await deleteDoc(docRef);
            setSurgePrices((prev) => prev.filter((area) => area.id !== id));
            return true;
        } catch (error) {
            console.error("Error deleting surge price: ", error);
            return false;
        }
    };


    // Calculate Total Fare Function
    const calculateTotalFare = async () => {
        try {
            const rides = await fetchRides();
            const today = new Date();
            const startOfCurrentMonth = startOfMonth(today);
            const startOfCurrentYear = startOfYear(today);
            const endOfCurrentMonth = endOfMonth(today);
            const endOfCurrentYear = endOfYear(today);

            const dailyTotal = rides.reduce((acc, ride) => {
                const rideDate = ride.rideDate instanceof Timestamp ? ride.rideDate.toDate() : new Date(ride.rideDate);
                if (isWithinInterval(rideDate, { start: startOfDay(today), end: endOfDay(today) })) {
                    return acc + (ride.fare || 0);
                }
                return acc;
            }, 0);

            const monthlyTotal = rides.reduce((acc, ride) => {
                const rideDate = ride.rideDate instanceof Timestamp ? ride.rideDate.toDate() : new Date(ride.rideDate);
                if (isWithinInterval(rideDate, { start: startOfCurrentMonth, end: endOfCurrentMonth })) {
                    return acc + (ride.fare || 0);
                }
                return acc;
            }, 0);

            const yearlyTotal = rides.reduce((acc, ride) => {
                const rideDate = ride.rideDate instanceof Timestamp ? ride.rideDate.toDate() : new Date(ride.rideDate);
                if (isWithinInterval(rideDate, { start: startOfCurrentYear, end: endOfCurrentYear })) {
                    return acc + (ride.fare || 0);
                }
                return acc;
            }, 0);

            console.log(dailyTotal)
            console.log(monthlyTotal)
            console.log(yearlyTotal)

            return {
                daily: [], // Add your daily data calculation here
                monthly: [], // Add your monthly data calculation here
                annually: [], // Add your annually data calculation here
                total: dailyTotal + monthlyTotal + yearlyTotal // Sum totals or customize as needed
            };
        } catch (error) {
            console.error('Error calculating total fare:', error);
            return {
                daily: [],
                monthly: [],
                annually: [],
                total: 0
            };
        }
    };


    // Use Effect to fetch and calculate fare on component mount
    useEffect(() => {
        calculateTotalFare();
    }, []);



    return (
        <MyContext.Provider value={{
            getAdmin, fetchUsers, fetchRides, addFareAdjustment,
            fetchFareAdjustments, editFareAdjustment, deleteFareAdjustment,
            logout, fetchCaptains, fetchCaptainById,
            saveNotification, fetchNotifications, editNotification, deleteNotification,
            savePromotion, fetchPromotions, editPromotions, deletePromotions,
            fetchCaptainsCount, fetchRidesCountByStatus, fetchRidesPrice,
            fetchChats, fetchMessages, addSurgePrice, updateSurgePrice, deleteSurgePrice, loggedinUser, currentUser, calculateTotalFare,
            totalFareDaily, totalFareMonthly, totalFareYearly

        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState
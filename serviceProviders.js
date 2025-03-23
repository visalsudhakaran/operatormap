const serviceProviders = [
    { name: "NetLink Broadband", pincode: 680001, location: "Thrissur", connections: 320, serviceableAreas: [680002, 680003, 680004, 680005, 680006] },
    { name: "FastFiber Network", pincode: 680002, location: "Thrissur", connections: 280, serviceableAreas: [680001, 680003, 680004, 680007, 680008] },
    { name: "SpeedyNet Solutions", pincode: 680003, location: "Kunnamkulam", connections: 350, serviceableAreas: [680002, 680004, 680005, 680009, 680010] },
    { name: "KeralaConnect", pincode: 680004, location: "Guruvayoor", connections: 400, serviceableAreas: [680003, 680005, 680006, 680011, 680012] },
    { name: "UltraFiber", pincode: 680005, location: "Chavakkad", connections: 290, serviceableAreas: [680001, 680002, 680004, 680013, 680014] },
    { name: "MetroNet", pincode: 680006, location: "Irinjalakuda", connections: 450, serviceableAreas: [680002, 680005, 680007, 680015, 680016] },
    { name: "SuperNet", pincode: 680007, location: "Kodungallur", connections: 330, serviceableAreas: [680003, 680006, 680008, 680017, 680018] },
    { name: "HyperSpeed Broadband", pincode: 680008, location: "Mala", connections: 370, serviceableAreas: [680002, 680006, 680009, 680019, 680020] },
    { name: "OpticNet Services", pincode: 680009, location: "Wadakkanchery", connections: 390, serviceableAreas: [680003, 680007, 680010, 680021, 680022] },
    { name: "Express Internet", pincode: 680010, location: "Peramangalam", connections: 310, serviceableAreas: [680001, 680005, 680011, 680023, 680024] },
];

// Generate 90 more providers dynamically
for (let i = 11; i <= 100; i++) {
    let pincode = 680000 + i;
    let totalConnections = Math.floor(Math.random() * 5000); // Random from 0 to 5000
    totalConnections = totalConnections > 1500 ? "1500+" : totalConnections; // Limit to 1500+

    serviceProviders.push({
        name: `Provider ${i}`,
        pincode: pincode,
        location: `Location ${i}`,
        connections: Math.floor(Math.random() * 500), // Random connections (0-500)
        serviceableAreas: [
            pincode + 1, 
            pincode + 2, 
            pincode - 1, 
            pincode - 2, 
            pincode + 3
        ],
        totalConnections: totalConnections
    });
}

export default serviceProviders;

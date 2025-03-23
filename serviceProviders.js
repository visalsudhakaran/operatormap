const serviceProviders = [
    {
        name: "NetLink Broadband",
        pincode: 680001,
        location: "Thrissur",
        serviceableAreas: {
            680002: Math.floor(Math.random() * 1001),
            680003: Math.floor(Math.random() * 1001),
            680004: Math.floor(Math.random() * 1001),
            680005: Math.floor(Math.random() * 1001),
            680006: Math.floor(Math.random() * 1001),
        }
    },
    {
        name: "FastFiber Network",
        pincode: 680002,
        location: "Thrissur",
        serviceableAreas: {
            680001: Math.floor(Math.random() * 1001),
            680003: Math.floor(Math.random() * 1001),
            680004: Math.floor(Math.random() * 1001),
            680007: Math.floor(Math.random() * 1001),
            680008: Math.floor(Math.random() * 1001),
        }
    },
    {
        name: "SpeedyNet Solutions",
        pincode: 680003,
        location: "Kunnamkulam",
        serviceableAreas: {
            680002: Math.floor(Math.random() * 1001),
            680004: Math.floor(Math.random() * 1001),
            680005: Math.floor(Math.random() * 1001),
            680009: Math.floor(Math.random() * 1001),
            680010: Math.floor(Math.random() * 1001),
        }
    },
];

// Generate 97 more providers dynamically
for (let i = 4; i <= 100; i++) {
    let pincode = 680000 + i;
    serviceProviders.push({
        name: `Provider ${i}`,
        pincode: pincode,
        location: `Location ${i}`,
        serviceableAreas: {
            [pincode + 1]: Math.floor(Math.random() * 1001),
            [pincode + 2]: Math.floor(Math.random() * 1001),
            [pincode - 1]: Math.floor(Math.random() * 1001),
            [pincode - 2]: Math.floor(Math.random() * 1001),
            [pincode + 3]: Math.floor(Math.random() * 1001),
        }
    });
}

export default serviceProviders;

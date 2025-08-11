# 🏛 TrueTrace – Preventing Fake Manufacturing of Historical Monuments Using Blockchain

## 📌 Overview
**TrueTrace** is a blockchain-powered solution to combat the fake manufacturing and illegal replication of historical monuments.  
By leveraging the **immutable and transparent nature of blockchain**, TrueTrace enables:
- Permanent and tamper-proof monument records
- Instant authenticity verification
- Traceability of manufacturing and ownership history

---

## ✨ Features
- 🔒 **Blockchain Integration** – Secure monument data storage
- 🛡 **Immutable Records** – No one can alter stored monument details
- ✅ **Authenticity Verification** – Verify using Unique ID or QR code
- 🎨 **User-Friendly Interface** – Simple and modern UI
- ⚡ **Real-Time Validation** – Get verification results in seconds

---

## 🏗 Tech Stack
**Frontend:** React.js / HTML / CSS / JavaScript  
**Backend:** Node.js + Express.js  
**Blockchain:** Ethereum + Ganache (Local Development)  
**Smart Contracts:** Solidity (Truffle Framework)  
**Database:** MongoDB  
**Tools:** MetaMask, Ganache CLI/UI, Truffle

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/truetrace.git
cd truetrace

2️⃣ Install Dependencies
bash
Copy code
npm install
cd client && npm install
3️⃣ Start Ganache (Local Blockchain)
Option 1: Ganache UI
Open Ganache

Create a new workspace

Note the RPC Server address (default: http://127.0.0.1:7545)

Option 2: Ganache CLI
bash
Copy code
ganache-cli --deterministic
4️⃣ Compile & Migrate Smart Contracts
bash
Copy code
truffle compile
truffle migrate --network development
5️⃣ Connect MetaMask
Open MetaMask and switch network to Localhost 8545

Import Ganache accounts into MetaMask using private keys from Ganache

6️⃣ Run the Application
bash
Copy code
# Backend
npm start

# Frontend
cd client
npm start
🖥 Usage Examples
🔹 Adding a Monument
Navigate to Add Monument in the UI

Fill in:

Name: Taj Mahal

Location: Agra, India

Year: 1632

Unique ID: TM1632

Submit → Data stored in blockchain & MongoDB

Ganache Transaction Log Example:

yaml
Copy code
Contract call: registerMonument
From: 0xAbC123...
To: MonumentRegistry (0xDeF456...)
Gas used: 72131
🔹 Verifying a Monument
Go to Verify Monument in the UI

Enter Unique ID: TM1632 (or scan QR)

Blockchain returns authenticity instantly:

yaml
Copy code
Monument Name: Taj Mahal
Location: Agra, India
Year: 1632
Status: ✅ Authentic
📂 Project Structure
bash
Copy code
TrueTrace/
│── contracts/         # Solidity smart contracts
│── migrations/        # Truffle migration scripts
│── client/            # Frontend React app
│── server/            # Backend Node.js code
│── test/              # Smart contract tests
│── truffle-config.js  # Truffle configuration
│── package.json
└── README.md
🧪 Example Smart Contract (Solidity)
solidity
Copy code
pragma solidity ^0.8.0;

contract MonumentRegistry {
    struct Monument {
        string name;
        string location;
        uint256 year;
        string uniqueId;
    }

    mapping(string => Monument) public monuments;

    function registerMonument(
        string memory _name,
        string memory _location,
        uint256 _year,
        string memory _uniqueId
    ) public {
        monuments[_uniqueId] = Monument(_name, _location, _year, _uniqueId);
    }

    function verifyMonument(string memory _uniqueId)
        public
        view
        returns (string memory, string memory, uint256)
    {
        Monument memory m = monuments[_uniqueId];
        return (m.name, m.location, m.year);
    }
}
📸 Screenshots / Demo
(Add screenshots or GIFs here to show how the UI looks and works)

📜 License
MIT License – You’re free to use and modify this project with attribution.

🤝 Contributing
Contributions are welcome! Feel free to:

Open issues

Suggest new features

Submit pull requests




/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name ,body_design,Transmission, fuel_type , top_speed , horsepower,acceleration) {
    let NFT = {
        name: name,
        body_design: body_design,
        Transmission: Transmission,
        fuel_type: fuel_type,
        top_speed: top_speed,
        horsepower: horsepower,
        acceleration:acceleration
    }
    NFTContainer.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\    --------THE PORSCHE NFTs--------    \n\n" );
        console.log("name: " + NFTContainer[i].name);
        console.log("body_design: " + NFTContainer[i].body_design);
        console.log("Transmission: " + NFTContainer[i].Transmission);
        console.log("fuel_type: " + NFTContainer[i].fuel_type);
        console.log("top_speed: " + NFTContainer[i].top_speed);
        console.log("horsepower: " + NFTContainer[i].horsepower);
        console.log("acceleration: " + NFTContainer[i].acceleration);
        console.log("\n\n______________________________________________\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs  Minted  " + NFTContainer.length);

}

// call your functions below this line
mintNFT("911 Carrera", "Coupe", "PDK", "Gasoline", "294km/h", 379, "3.9sec");
mintNFT("911 GT3 RS", "Coupe", "PDK", "Gasoline", "296km/h", 518, "3.2sec");
mintNFT("718 Spyder RS", "Roadster","PDK" , "Gasoline","308km/h", 493, "3.4sec");
mintNFT("Cayenne Turbo E-Hybrid Coupé with GT", "Coupe", "Tiptronic", "Hybrid", "305km/h", 729, "3.6sec");
mintNFT("Taycan Turbo GT", "Sport saloon","2-speed transmission" , "Electro","290km/h", 1019, "2.3sec");
listNFTs();
getTotalSupply();
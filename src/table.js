class Table{
    constructor(number_players, each_bet, starting_money, list_of_players){
        this.players = [];
        this.total_money = number_players * each_bet;
        this.deck = new Deck();
        for(var i =0; i<number_players; i++){
            this.players.push(new Player(list_of_players[i],starting_money))
        }
    }
    play(){
        if(this.players.length>=17){
            return false;
        }
        console.log("Shufffling deck");
        this.deck.shuffle();
        console.log("Distributing cards......");
        for (var i =0; i<this.players.length; i++){
            console.log("Distributing card to:",this.players[i].name);
            var first_card = this.deck.top();
            var second_card = this.deck.top();
            var third_card = this.deck.top();
            if( first_card && second_card && third_card){
                this.players[i].assign_card(new Triple(first_card,second_card,third_card));
            }
            else{
                console.log(first_card,second_card,third_card);
                this.deck.print_deck();
            }
            
            this.players[i].show_to_self();
        }
    }
}

var table = new Table(2,200,2000,["Damna","Bahadur"]);
console.log("Starting the game....")
table.play();
console.log("end game");
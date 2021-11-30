const playerJoin = ( player: PlayerMp ) => {
    mp.gui.chat.push( `${player.name} has joined the server` );
};

mp.events.add( "playerJoin", playerJoin );
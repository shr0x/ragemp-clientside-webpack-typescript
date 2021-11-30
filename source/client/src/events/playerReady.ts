const playerReady = ( player: PlayerMp ) => {
    mp.gui.chat.push( `${player.name} is now ready!` );
}

mp.events.add( "playerReady", playerReady );
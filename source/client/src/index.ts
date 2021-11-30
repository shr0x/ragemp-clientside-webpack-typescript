// My helpers, they are meant to help me with my coding and debugging.
import { setPlayerPos } from "./helpers/helpers";

// My events
import "./events/playerJoin";
import "./events/playerReady";

// My modules
//import "./modules/example";


//CEF work
import "./modules/cefwork";

// Client initialize!
const initClientSide = () => {
    setPlayerPos( new mp.Vector3( 123, 123, 123 ) );
};


// Client start! (Called when a player joins the server!)
try {
    initClientSide();
} catch ( err: any ) {
    mp.console.logError( err );
}




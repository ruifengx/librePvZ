searchState.loadedDescShard("event_listener", 0, "Notify async tasks or threads.\nA synchronization primitive for notifying async tasks and …\nA guard waiting for a notification from an <code>Event</code>.\nA value that can be converted into a <code>Notification</code>.\nA handle that is listening to an <code>Event</code>.\nA notification that can be used to notify an <code>Event</code>.\nThe notification type.\nThe tag data associated with a notification.\nConvert this value into an additional notification.\nConvert this value into an additional notification.\nDrops this listener and discards its notification (if any) …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert this value into a notification.\nTell whether any listeners are currently notified.\nReturns a guard listening for a notification.\nCreate a stack-based event listener for an <code>Event</code>.\nReturns <code>true</code> if this listener listens to the given <code>Event</code>.\nCreates a new <code>Event</code>.\nNotifies a number of active listeners.\nNotifies a number of active and still unnotified listeners.\nNotifies a number of active and still unnotified listeners …\nNotifies a number of active listeners without emitting a …\nDon’t emit a fence for this notification.\nDon’t emit a fence for this notification.\nReturns <code>true</code> if both listeners listen to the same <code>Event</code>.\nUse a tag with this notification.\nUse a tag with this notification.\nUse a function to generate a tag with this notification.\nUse a function to generate a tag with this notification.\nGet the number of listeners currently listening to this …\nBlocks until a notification is received.\nBlocks until a notification is received or a deadline is …\nBlocks until a notification is received or a timeout is …\nCreates a new <code>Event</code> with a tag type.")
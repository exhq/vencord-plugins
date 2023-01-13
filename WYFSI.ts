import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";
import { findByPropsLazy } from '../webpack/webpack';


const MessageAction = findByPropsLazy("deleteMessage", "startEditMessage");

function check() {
    if (new Date().getUTCHours() == 7 && new Date().getUTCMinutes() == 27) {
        MessageAction.sendMessage(Vencord.Webpack.Common.SelectedChannelStore.getChannelId(), { content: "WYFSI" });
    }
}
let inverval;
export default definePlugin({

    name: "WYFSI",
    description: "https://youtu.be/AaAF51Gwbxo?t=67",
    authors: [Devs.echo],
    start() {
        inverval = setInterval(check, 30000);
    },
    stop() {
        clearInterval(inverval);
    }
});

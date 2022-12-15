/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 exhq
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { findOption, RequiredMessageOption } from "@api/Commands";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

async function youtuberify(link: string): Promise<string> {
    return await fetch(`https://youtuber.exhq.workers.dev/${link}`).then(it => it.text());
}



export default definePlugin({
    name: "fuck spotify",
    authors: [
        Devs.echo
    ],
    description: "https://www.reddit.com/r/spotify/comments/xzez3f/",
    dependencies: ["CommandsAPI"],
    commands: [{
        name: "youtubify",
        options: [RequiredMessageOption],
        description: "spotify bad. bad bad. spotify cringe. spotify stupid dumdum. spotify is hot garbage. i will singlehandedly ddos spotify",
        execute: async opts => ({
            content: await youtuberify(findOption(opts, "message", ""))
        }),
    }]
});

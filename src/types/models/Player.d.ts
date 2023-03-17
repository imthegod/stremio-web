interface PlayerVideo extends Video {
    upcomming: boolean,
    watched: boolean,
    progress: boolean | null,
    scheduled: boolean,
    deepLinks: VideoDeepLinks,
}

interface PlayerMetaItem extends Video {
    videos: PlayerVideo[],
}

interface NextVideo extends Video {
    deepLinks: VideoDeepLinks,
}

interface SelectedStream extends Stream {
    deepLinks: StreamDeepLinks,
}

type Subtitle = {
    id: string,
    lang: string,
    origin: string,
    url: string,
};

type Player = {
    addon: Addon | null,
    libraryItem: LibraryItem | null,
    metaItem: Loadable<PlayerMetaItem> | null,
    nextVideo: NextVideo | null,
    selected: {
        stream: SelectedStream,
        metaRequest: ResourceRequest,
        streamRequest: ResourceRequest,
        subtitlesPath: ResourceRequestPath,
    } | null,
    seriesInfo: {
        season: number,
        episode: number,
    } | null,
    subtitles: Subtitle[],
    title: string | null,
};
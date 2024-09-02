const forcedAddonsToLocalStorage = {
    'auth': null,
    'addons': [
        {
            'manifest': {
                'id': 'com.linvo.cinemeta',
                'version': '3.0.11',
                'name': 'Cinemeta',
                'contactEmail': null,
                'description': 'The official addon for movie and series catalogs',
                'logo': null,
                'background': null,
                'types': [
                    'movie',
                    'series'
                ],
                'resources': [
                    'catalog',
                    'meta',
                    'addon_catalog'
                ],
                'idPrefixes': [
                    'tt'
                ],
                'catalogs': [],
                'addonCatalogs': [],
                'behaviorHints': {
                    'adult': false,
                    'p2p': false,
                    'configurable': false,
                    'configurationRequired': false
                }
            },
            'transportUrl': 'https://v3-cinemeta.strem.io/manifest.json',
            'flags': {
                'official': true,
                'protected': true
            }
        },
        {
            'manifest': {
                'id': 'org.stremio.opensubtitlesv3',
                'version': '1.0.0',
                'name': 'OpenSubtitles v3',
                'contactEmail': null,
                'description': 'OpenSubtitles v3 Addon for Stremio',
                'logo': 'http://www.strem.io/images/addons/opensubtitles-logo.png',
                'background': null,
                'types': [
                    'movie',
                    'series'
                ],
                'resources': [
                    'subtitles'
                ],
                'idPrefixes': [
                    'tt'
                ],
                'catalogs': [],
                'addonCatalogs': [],
                'behaviorHints': {
                    'adult': false,
                    'p2p': false,
                    'configurable': false,
                    'configurationRequired': false
                }
            },
            'transportUrl': 'https://opensubtitles-v3.strem.io/manifest.json',
            'flags': {
                'official': true,
                'protected': false
            }
        },
        {
            'manifest': {
                'id': 'org.stremio.local',
                'version': '1.10.0',
                'name': 'Local Files (without catalog support)',
                'contactEmail': null,
                'description': 'Local add-on to find playable files: .torrent, .mp4, .mkv and .avi',
                'logo': null,
                'background': null,
                'types': [
                    'movie',
                    'series',
                    'other'
                ],
                'resources': [
                    {
                        'name': 'meta',
                        'types': [
                            'other'
                        ],
                        'idPrefixes': [
                            'local:',
                            'bt:'
                        ]
                    },
                    {
                        'name': 'stream',
                        'types': [
                            'movie',
                            'series'
                        ],
                        'idPrefixes': [
                            'tt'
                        ]
                    }
                ],
                'idPrefixes': null,
                'catalogs': [],
                'addonCatalogs': [],
                'behaviorHints': {
                    'adult': false,
                    'p2p': false,
                    'configurable': false,
                    'configurationRequired': false
                }
            },
            'transportUrl': 'http://127.0.0.1:11470/local-addon/manifest.json',
            'flags': {
                'official': true,
                'protected': true
            }
        },
        {
            'manifest': {
                'id': 'marcojoao.ml.cyberflix.catalog',
                'version': '1.5.2',
                'name': 'Cyberflix Catalog',
                'contactEmail': null,
                'description': 'Cyberflix, an catalog add-on for Stremio, aggregates the most popular steaming platforms such as Netflix, Amazon Prime or Hulu, and also specific catalogs for Kids, Asian or Anime.',
                'logo': 'http://cyberflix.elfhosted.com/logo.png',
                'background': 'http://cyberflix.elfhosted.com/background.png',
                'types': [
                    'series',
                    'movie'
                ],
                'resources': [
                    'catalog',
                    'meta'
                ],
                'idPrefixes': [
                    'cyberflix:'
                ],
                'catalogs': [
                    {
                        'id': 'anime.popular.movie',
                        'type': 'Anime',
                        'name': 'Popular Movies',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'Action',
                                    'Adventure',
                                    'Animation',
                                    'Comedy',
                                    'Crime',
                                    'Documentary',
                                    'Drama',
                                    'Family',
                                    'Fantasy',
                                    'History',
                                    'Horror',
                                    'Music',
                                    'Mystery',
                                    'Romance',
                                    'Sci-Fi',
                                    'Sport',
                                    'Thriller'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.popular.series',
                        'type': 'Anime',
                        'name': 'Popular Series',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'Action',
                                    'Adventure',
                                    'Animation',
                                    'Comedy',
                                    'Crime',
                                    'Drama',
                                    'Family',
                                    'Fantasy',
                                    'History',
                                    'Horror',
                                    'Kids',
                                    'Music',
                                    'Mystery',
                                    'Romance',
                                    'Sci-Fi',
                                    'Sport',
                                    'Thriller'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.trending.movie',
                        'type': 'Anime',
                        'name': 'Trending Movies',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'Action',
                                    'Adventure',
                                    'Animation',
                                    'Comedy',
                                    'Crime',
                                    'Drama',
                                    'Family',
                                    'Fantasy',
                                    'History',
                                    'Horror',
                                    'Music',
                                    'Mystery',
                                    'Romance',
                                    'Sci-Fi',
                                    'Thriller'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.trending.series',
                        'type': 'Anime',
                        'name': 'Trending Series',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'Action',
                                    'Adventure',
                                    'Animation',
                                    'Comedy',
                                    'Crime',
                                    'Drama',
                                    'Family',
                                    'Fantasy',
                                    'History',
                                    'Horror',
                                    'Kids',
                                    'Music',
                                    'Mystery',
                                    'Romance',
                                    'Sci-Fi',
                                    'Sport',
                                    'Thriller'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.new.movie',
                        'type': 'Anime',
                        'name': 'New Movies',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2014',
                                    '2011',
                                    '2010',
                                    '2001',
                                    '1997',
                                    '1991',
                                    '1990',
                                    '1984'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.new.series',
                        'type': 'Anime',
                        'name': 'New Series',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2025',
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2014',
                                    '2013',
                                    '2011',
                                    '2008',
                                    '2004'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.season.winter.movie',
                        'type': 'Anime',
                        'name': 'Winter Season Movies',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2011',
                                    '2010'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.season.winter.series',
                        'type': 'Anime',
                        'name': 'Winter Season Series',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2025',
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2011'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.season.spring.movie',
                        'type': 'Anime',
                        'name': 'Spring Season Movies',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2011',
                                    '2010'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.season.spring.series',
                        'type': 'Anime',
                        'name': 'Spring Season Series',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2008',
                                    '2002'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.season.summer.movie',
                        'type': 'Anime',
                        'name': 'Summer Season Movies',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2011',
                                    '2010'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.season.summer.series',
                        'type': 'Anime',
                        'name': 'Summer Season Series',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2010',
                                    '2009'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.season.fall.movie',
                        'type': 'Anime',
                        'name': 'Fall Season Movies',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2011',
                                    '2010',
                                    '2009'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'anime.season.fall.series',
                        'type': 'Anime',
                        'name': 'Fall Season Series',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    '2024',
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2011',
                                    '2008'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    }
                ],
                'addonCatalogs': [],
                'behaviorHints': {
                    'adult': false,
                    'p2p': false,
                    'configurable': true,
                    'configurationRequired': false
                }
            },
            'transportUrl': 'https://cyberflix.elfhosted.com/c/catalogs=88ef9,f3440,6ff87,4cc98,e91bb,14b3a,04d2d,d749e,c47ac,113e4,9b407,e86b7,35afa,b51b5%7Clang=en/manifest.json',
            'flags': {
                'official': false,
                'protected': false
            }
        },
        {
            'manifest': {
                'id': 'community.anime.kitsu',
                'version': '0.0.9',
                'name': 'Anime Kitsu',
                'contactEmail': null,
                'description': 'Unofficial Kitsu.io anime catalog addon',
                'logo': 'https://i.imgur.com/7N6XGoO.png',
                'background': 'https://i.imgur.com/ym4n96o.png',
                'types': [
                    'anime',
                    'movie',
                    'series'
                ],
                'resources': [
                    'catalog',
                    'meta',
                    'subtitles'
                ],
                'idPrefixes': [
                    'kitsu',
                    'mal',
                    'anilist',
                    'anidb'
                ],
                'catalogs': [
                    {
                        'id': 'kitsu-anime-trending',
                        'type': 'anime',
                        'name': 'Kitsu Trending',
                        'extraRequired': [],
                        'extraSupported': []
                    },
                    {
                        'id': 'kitsu-anime-airing',
                        'type': 'anime',
                        'name': 'Kitsu Top Airing',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'Action',
                                    'Adventure',
                                    'Comedy',
                                    'Drama',
                                    'Sci-Fi',
                                    'Space',
                                    'Mystery',
                                    'Magic',
                                    'Supernatural',
                                    'Police',
                                    'Fantasy',
                                    'Sports',
                                    'Romance',
                                    'Cars',
                                    'Slice of Life',
                                    'Racing',
                                    'Horror',
                                    'Psychological',
                                    'Thriller',
                                    'Martial Arts',
                                    'Super Power',
                                    'School',
                                    'Ecchi',
                                    'Vampire',
                                    'Historical',
                                    'Military',
                                    'Dementia',
                                    'Mecha',
                                    'Demons',
                                    'Samurai',
                                    'Harem',
                                    'Music',
                                    'Parody',
                                    'Shoujo Ai',
                                    'Game',
                                    'Shounen Ai',
                                    'Kids',
                                    'Hentai',
                                    'Yuri',
                                    'Yaoi',
                                    'Anime Influenced',
                                    'Gender Bender',
                                    'Doujinshi',
                                    'Mahou Shoujo',
                                    'Mahou Shounen',
                                    'Gore',
                                    'Law',
                                    'Cooking',
                                    'Mature',
                                    'Medical',
                                    'Political',
                                    'Tokusatsu',
                                    'Youth',
                                    'Workplace',
                                    'Crime',
                                    'Zombies',
                                    'Documentary',
                                    'Family',
                                    'Food',
                                    'Friendship',
                                    'Tragedy'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'kitsu-anime-popular',
                        'type': 'anime',
                        'name': 'Kitsu Most Popular',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'Action',
                                    'Adventure',
                                    'Comedy',
                                    'Drama',
                                    'Sci-Fi',
                                    'Space',
                                    'Mystery',
                                    'Magic',
                                    'Supernatural',
                                    'Police',
                                    'Fantasy',
                                    'Sports',
                                    'Romance',
                                    'Cars',
                                    'Slice of Life',
                                    'Racing',
                                    'Horror',
                                    'Psychological',
                                    'Thriller',
                                    'Martial Arts',
                                    'Super Power',
                                    'School',
                                    'Ecchi',
                                    'Vampire',
                                    'Historical',
                                    'Military',
                                    'Dementia',
                                    'Mecha',
                                    'Demons',
                                    'Samurai',
                                    'Harem',
                                    'Music',
                                    'Parody',
                                    'Shoujo Ai',
                                    'Game',
                                    'Shounen Ai',
                                    'Kids',
                                    'Hentai',
                                    'Yuri',
                                    'Yaoi',
                                    'Anime Influenced',
                                    'Gender Bender',
                                    'Doujinshi',
                                    'Mahou Shoujo',
                                    'Mahou Shounen',
                                    'Gore',
                                    'Law',
                                    'Cooking',
                                    'Mature',
                                    'Medical',
                                    'Political',
                                    'Tokusatsu',
                                    'Youth',
                                    'Workplace',
                                    'Crime',
                                    'Zombies',
                                    'Documentary',
                                    'Family',
                                    'Food',
                                    'Friendship',
                                    'Tragedy'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'kitsu-anime-rating',
                        'type': 'anime',
                        'name': 'Kitsu Highest Rated',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'Action',
                                    'Adventure',
                                    'Comedy',
                                    'Drama',
                                    'Sci-Fi',
                                    'Space',
                                    'Mystery',
                                    'Magic',
                                    'Supernatural',
                                    'Police',
                                    'Fantasy',
                                    'Sports',
                                    'Romance',
                                    'Cars',
                                    'Slice of Life',
                                    'Racing',
                                    'Horror',
                                    'Psychological',
                                    'Thriller',
                                    'Martial Arts',
                                    'Super Power',
                                    'School',
                                    'Ecchi',
                                    'Vampire',
                                    'Historical',
                                    'Military',
                                    'Dementia',
                                    'Mecha',
                                    'Demons',
                                    'Samurai',
                                    'Harem',
                                    'Music',
                                    'Parody',
                                    'Shoujo Ai',
                                    'Game',
                                    'Shounen Ai',
                                    'Kids',
                                    'Hentai',
                                    'Yuri',
                                    'Yaoi',
                                    'Anime Influenced',
                                    'Gender Bender',
                                    'Doujinshi',
                                    'Mahou Shoujo',
                                    'Mahou Shounen',
                                    'Gore',
                                    'Law',
                                    'Cooking',
                                    'Mature',
                                    'Medical',
                                    'Political',
                                    'Tokusatsu',
                                    'Youth',
                                    'Workplace',
                                    'Crime',
                                    'Zombies',
                                    'Documentary',
                                    'Family',
                                    'Food',
                                    'Friendship',
                                    'Tragedy'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'kitsu-anime-newest',
                        'type': 'anime',
                        'name': 'Kitsu Newest',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'Action',
                                    'Adventure',
                                    'Comedy',
                                    'Drama',
                                    'Sci-Fi',
                                    'Space',
                                    'Mystery',
                                    'Magic',
                                    'Supernatural',
                                    'Police',
                                    'Fantasy',
                                    'Sports',
                                    'Romance',
                                    'Cars',
                                    'Slice of Life',
                                    'Racing',
                                    'Horror',
                                    'Psychological',
                                    'Thriller',
                                    'Martial Arts',
                                    'Super Power',
                                    'School',
                                    'Ecchi',
                                    'Vampire',
                                    'Historical',
                                    'Military',
                                    'Dementia',
                                    'Mecha',
                                    'Demons',
                                    'Samurai',
                                    'Harem',
                                    'Music',
                                    'Parody',
                                    'Shoujo Ai',
                                    'Game',
                                    'Shounen Ai',
                                    'Kids',
                                    'Hentai',
                                    'Yuri',
                                    'Yaoi',
                                    'Anime Influenced',
                                    'Gender Bender',
                                    'Doujinshi',
                                    'Mahou Shoujo',
                                    'Mahou Shounen',
                                    'Gore',
                                    'Law',
                                    'Cooking',
                                    'Mature',
                                    'Medical',
                                    'Political',
                                    'Tokusatsu',
                                    'Youth',
                                    'Workplace',
                                    'Crime',
                                    'Zombies',
                                    'Documentary',
                                    'Family',
                                    'Food',
                                    'Friendship',
                                    'Tragedy'
                                ],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'kitsu-anime-list',
                        'type': 'anime',
                        'name': 'Kitsu',
                        'extra': [
                            {
                                'name': 'search',
                                'isRequired': true,
                                'options': [],
                                'optionsLimit': 1
                            },
                            {
                                'name': 'lastVideosIds',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 20
                            },
                            {
                                'name': 'skip',
                                'isRequired': false,
                                'options': [],
                                'optionsLimit': 1
                            }
                        ]
                    }
                ],
                'addonCatalogs': [],
                'behaviorHints': {
                    'adult': false,
                    'p2p': false,
                    'configurable': false,
                    'configurationRequired': false
                }
            },
            'transportUrl': 'https://anime-kitsu.strem.fun/manifest.json',
            'flags': {
                'official': false,
                'protected': false
            }
        },
        {
            'manifest': {
                'id': 'com.stremio.thepiratebay.plus',
                'version': '1.4.0',
                'name': 'ThePirateBay+',
                'contactEmail': null,
                'description': 'Search for movies, series and anime from ThePirateBay',
                'logo': 'https://i.imgur.com/dPa2clS.png',
                'background': 'https://i.imgur.com/t8wVwcg.jpg',
                'types': [
                    'movie',
                    'series'
                ],
                'resources': [
                    'stream'
                ],
                'idPrefixes': [
                    'tt'
                ],
                'catalogs': [],
                'addonCatalogs': [],
                'behaviorHints': {
                    'adult': false,
                    'p2p': false,
                    'configurable': false,
                    'configurationRequired': false
                }
            },
            'transportUrl': 'https://thepiratebay-plus.strem.fun/manifest.json',
            'flags': {
                'official': false,
                'protected': false
            }
        },
        {
            'manifest': {
                'id': 'com.stremio.torrentio.addon',
                'version': '0.0.14',
                'name': 'Torrentio',
                'contactEmail': null,
                'description': 'Provides torrent streams from scraped torrent providers. Currently supports YTS(+), EZTV(+), RARBG(+), 1337x(+), ThePirateBay(+), KickassTorrents(+), TorrentGalaxy(+), MagnetDL(+), HorribleSubs(+), NyaaSi(+), TokyoTosho(+), AniDex(+), Rutor(+), Rutracker(+), Comando(+), BluDV(+), Torrent9(+), MejorTorrent(+), Wolfmax4k(+), Cinecalidad(+). To configure providers, RealDebrid/Premiumize/AllDebrid/DebridLink/Offcloud/Put.io support and other settings visit https://torrentio.strem.fun',
                'logo': 'https://i.ibb.co/w4BnkC9/GwxAcDV.png',
                'background': 'https://i.ibb.co/VtSfFP9/t8wVwcg.jpg',
                'types': [
                    'movie',
                    'series',
                    'anime',
                    'other'
                ],
                'resources': [
                    {
                        'name': 'stream',
                        'types': [
                            'movie',
                            'series'
                        ],
                        'idPrefixes': [
                            'tt',
                            'kitsu'
                        ]
                    }
                ],
                'idPrefixes': null,
                'catalogs': [],
                'addonCatalogs': [],
                'behaviorHints': {
                    'adult': false,
                    'p2p': false,
                    'configurable': true,
                    'configurationRequired': false
                }
            },
            'transportUrl': 'https://torrentio.strem.fun/manifest.json',
            'flags': {
                'official': false,
                'protected': false
            }
        },
        {
            'manifest': {
                'id': 'animes-season-addon',
                'version': '1.10.1',
                'name': 'Animes\' season',
                'contactEmail': null,
                'description': 'A catalog addon for the latest anime seasons',
                'logo': 'https://styles.redditmedia.com/t5_yo4xr/styles/communityIcon_rv2fpnvbmfra1.png',
                'background': null,
                'types': [
                    'movie',
                    'series'
                ],
                'resources': [
                    'catalog'
                ],
                'idPrefixes': [
                    'tt',
                    'kitsu'
                ],
                'catalogs': [
                    {
                        'id': 'latest_anime_seasons',
                        'type': 'series',
                        'name': 'Anime Seasons',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'FALL',
                                    'WINTER',
                                    'SPRING',
                                    'SUMMER'
                                ],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'latest_anime_seasons',
                        'type': 'movie',
                        'name': 'Anime Seasons',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': false,
                                'options': [
                                    'FALL',
                                    'WINTER',
                                    'SPRING',
                                    'SUMMER'
                                ],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'archive_anime_seasons',
                        'type': 'series',
                        'name': 'Anime Years',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': true,
                                'options': [
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2011',
                                    '2010',
                                    '2009',
                                    '2008',
                                    '2007',
                                    '2006',
                                    '2005',
                                    '2004',
                                    '2003',
                                    '2002',
                                    '2001'
                                ],
                                'optionsLimit': 1
                            }
                        ]
                    },
                    {
                        'id': 'archive_anime_seasons',
                        'type': 'movie',
                        'name': 'Anime Years',
                        'extra': [
                            {
                                'name': 'genre',
                                'isRequired': true,
                                'options': [
                                    '2023',
                                    '2022',
                                    '2021',
                                    '2020',
                                    '2019',
                                    '2018',
                                    '2017',
                                    '2016',
                                    '2015',
                                    '2014',
                                    '2013',
                                    '2012',
                                    '2011',
                                    '2010',
                                    '2009',
                                    '2008',
                                    '2007',
                                    '2006',
                                    '2005',
                                    '2004',
                                    '2003',
                                    '2002',
                                    '2001'
                                ],
                                'optionsLimit': 1
                            }
                        ]
                    }
                ],
                'addonCatalogs': [],
                'behaviorHints': {
                    'adult': false,
                    'p2p': false,
                    'configurable': false,
                    'configurationRequired': false
                }
            },
            'transportUrl': 'https://victorgveloso.github.io/animes-season-addon/manifest.json',
            'flags': {
                'official': false,
                'protected': false
            }
        }
    ],
    'addonsLocked': false,
    'settings': {
        'interfaceLanguage': 'eng',
        'streamingServerUrl': 'http://127.0.0.1:11470/',
        'playerType': null,
        'bingeWatching': true,
        'playInBackground': true,
        'hardwareDecoding': true,
        'frameRateMatchingStrategy': 'FrameRateOnly',
        'nextVideoNotificationDuration': 35000,
        'audioPassthrough': false,
        'audioLanguage': 'eng',
        'secondaryAudioLanguage': null,
        'subtitlesLanguage': 'eng',
        'secondarySubtitlesLanguage': null,
        'subtitlesSize': 100,
        'subtitlesFont': 'Roboto',
        'subtitlesBold': false,
        'subtitlesOffset': 5,
        'subtitlesTextColor': '#FFFFFFFF',
        'subtitlesBackgroundColor': '#00000000',
        'subtitlesOutlineColor': '#000000',
        'subtitlesOpacity': 100,
        'escExitFullscreen': true,
        'seekTimeDuration': 10000,
        'seekShortTimeDuration': 3000,
        'pauseOnMinimize': false,
        'surroundSound': false,
        'streamingServerWarningDismissed': null
    }
};

module.exports = forcedAddonsToLocalStorage;

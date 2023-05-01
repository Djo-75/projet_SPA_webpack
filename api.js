{
  "swagger": "2.0",
  "info": {
    "title": "RAWG Video Games Database API",
    "description": "\nThe largest open video games database.\n\n### Why build on RAWG\n- More than 350,000 games for 50 platforms including mobiles.\n- Rich metadata: tags, genres, developers, publishers, individual creators, official websites, release dates,\nMetacritic ratings.\n- Where to buy: links to digital distribution services\n- Similar games based on visual similarity.\n- Player activity data: Steam average playtime and RAWG player counts and ratings.\n- Actively developing and constantly getting better by user contribution and our algorithms.\n\n### Terms of Use\n- Free for personal use as long as you attribute RAWG as the source of the data and/or images and add an active\nhyperlink from every page where the data of RAWG is used.\n- Free for commercial use for startups and hobby projects with not more than 100,000 monthly active users or 500,000\npage views per month. If your project is larger than that, email us at [api@rawg.io](mailto:api@rawg.io) for\ncommercial terms.\n- No cloning. It would not be cool if you used our API to launch a clone of RAWG. We know it is not always easy\nto say what is a duplicate and what isn't. Drop us a line at [api@rawg.io](mailto:api@rawg.io) if you are in doubt,\nand we will talk it through.\n- You must include an API key with every request. The key can be obtained at https://rawg.io/apidocs.\nIf you don’t provide it, we may ban your requests.\n\n__[Read more](https://rawg.io/apidocs)__.\n",
    "version": "v1.0"
  },
  "host": "api.rawg.io",
  "schemes": [
    "https"
  ],
  "basePath": "/api",
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "securityDefinitions": {},
  "paths": {
    "/creator-roles": {
      "get": {
        "operationId": "creator-roles_list",
        "summary": "Get a list of creator positions (jobs).",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Position"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "creator-roles"
        ]
      },
      "parameters": []
    },
    "/creators": {
      "get": {
        "operationId": "creators_list",
        "summary": "Get a list of game creators.",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Person"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "creators"
        ]
      },
      "parameters": []
    },
    "/creators/{id}": {
      "get": {
        "operationId": "creators_read",
        "summary": "Get details of the creator.",
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/PersonSingle"
            }
          }
        },
        "tags": [
          "creators"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Person.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/developers": {
      "get": {
        "operationId": "developers_list",
        "summary": "Get a list of game developers.",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Developer"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "developers"
        ]
      },
      "parameters": []
    },
    "/developers/{id}": {
      "get": {
        "operationId": "developers_read",
        "summary": "Get details of the developer.",
        "description": "",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/DeveloperSingle"
            }
          }
        },
        "tags": [
          "developers"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Developer.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/games": {
      "get": {
        "operationId": "games_list",
        "summary": "Get a list of games.",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "search",
            "in": "query",
            "description": "Search query.",
            "type": "string"
          },
          {
            "name": "search_precise",
            "in": "query",
            "description": "Disable fuzziness for the search query.",
            "type": "boolean"
          },
          {
            "name": "search_exact",
            "in": "query",
            "description": "Mark the search query as exact.",
            "type": "boolean"
          },
          {
            "name": "parent_platforms",
            "in": "query",
            "description": "Filter by parent platforms, for example: `1,2,3`.",
            "type": "string"
          },
          {
            "name": "platforms",
            "in": "query",
            "description": "Filter by platforms, for example: `4,5`.",
            "type": "string"
          },
          {
            "name": "stores",
            "in": "query",
            "description": "Filter by stores, for example: `5,6`.",
            "type": "string"
          },
          {
            "name": "developers",
            "in": "query",
            "description": "Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`.",
            "type": "string"
          },
          {
            "name": "publishers",
            "in": "query",
            "description": "Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.",
            "type": "string"
          },
          {
            "name": "genres",
            "in": "query",
            "description": "Filter by genres, for example: `4,51` or `action,indie`.",
            "type": "string"
          },
          {
            "name": "tags",
            "in": "query",
            "description": "Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.",
            "type": "string"
          },
          {
            "name": "creators",
            "in": "query",
            "description": "Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.",
            "type": "string"
          },
          {
            "name": "dates",
            "in": "query",
            "description": "Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.",
            "type": "string"
          },
          {
            "name": "updated",
            "in": "query",
            "description": "Filter by an update date, for example: `2020-12-01,2020-12-31`.",
            "type": "string"
          },
          {
            "name": "platforms_count",
            "in": "query",
            "description": "Filter by platforms count, for example: `1`.",
            "type": "integer"
          },
          {
            "name": "metacritic",
            "in": "query",
            "description": "Filter by a metacritic rating, for example: `80,100`.",
            "type": "string"
          },
          {
            "name": "exclude_collection",
            "in": "query",
            "description": "Exclude games from a particular collection, for example: `123`.",
            "type": "integer"
          },
          {
            "name": "exclude_additions",
            "in": "query",
            "description": "Exclude additions.",
            "type": "boolean"
          },
          {
            "name": "exclude_parents",
            "in": "query",
            "description": "Exclude games which have additions.",
            "type": "boolean"
          },
          {
            "name": "exclude_game_series",
            "in": "query",
            "description": "Exclude games which included in a game series.",
            "type": "boolean"
          },
          {
            "name": "exclude_stores",
            "in": "query",
            "description": "Exclude stores, for example: `5,6`.",
            "type": "string"
          },
          {
            "name": "ordering",
            "in": "query",
            "description": "Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`, `metacritic`. You can reverse the sort order adding a hyphen, for example: `-released`.",
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Game"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": []
    },
    "/games/{game_pk}/additions": {
      "get": {
        "operationId": "games_additions_list",
        "summary": "Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Game"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "game_pk",
          "in": "path",
          "required": true,
          "type": "string"
        }
      ]
    },
    "/games/{game_pk}/development-team": {
      "get": {
        "operationId": "games_development-team_list",
        "summary": "Get a list of individual creators that were part of the development team.",
        "description": "",
        "parameters": [
          {
            "name": "ordering",
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "required": false,
            "type": "string"
          },
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/GamePersonList"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "game_pk",
          "in": "path",
          "required": true,
          "type": "string"
        }
      ]
    },
    "/games/{game_pk}/game-series": {
      "get": {
        "operationId": "games_game-series_list",
        "summary": "Get a list of games that are part of the same series.",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Game"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "game_pk",
          "in": "path",
          "required": true,
          "type": "string"
        }
      ]
    },
    "/games/{game_pk}/parent-games": {
      "get": {
        "operationId": "games_parent-games_list",
        "summary": "Get a list of parent games for DLC's and editions.",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Game"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "game_pk",
          "in": "path",
          "required": true,
          "type": "string"
        }
      ]
    },
    "/games/{game_pk}/screenshots": {
      "get": {
        "operationId": "games_screenshots_list",
        "summary": "Get screenshots for the game.",
        "description": "",
        "parameters": [
          {
            "name": "ordering",
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "required": false,
            "type": "string"
          },
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/ScreenShot"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "game_pk",
          "in": "path",
          "required": true,
          "type": "string"
        }
      ]
    },
    "/games/{game_pk}/stores": {
      "get": {
        "operationId": "games_stores_list",
        "summary": "Get links to the stores that sell the game.",
        "description": "",
        "parameters": [
          {
            "name": "ordering",
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "required": false,
            "type": "string"
          },
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/GameStoreFull"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "game_pk",
          "in": "path",
          "required": true,
          "type": "string"
        }
      ]
    },
    "/games/{id}": {
      "get": {
        "operationId": "games_read",
        "summary": "Get details of the game.",
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "An ID or a slug identifying this Game.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/GameSingle"
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Game.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/games/{id}/achievements": {
      "get": {
        "operationId": "games_achievements_read",
        "summary": "Get a list of game achievements.",
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "An ID or a slug identifying this Game.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/ParentAchievement"
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Game.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/games/{id}/movies": {
      "get": {
        "operationId": "games_movies_read",
        "summary": "Get a list of game trailers.",
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "An ID or a slug identifying this Game.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Movie"
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Game.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/games/{id}/reddit": {
      "get": {
        "operationId": "games_reddit_read",
        "summary": "Get a list of most recent posts from the game's subreddit.",
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "An ID or a slug identifying this Game.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Reddit"
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Game.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/games/{id}/suggested": {
      "get": {
        "operationId": "games_suggested_read",
        "summary": "Get a list of visually similar games, available only for business and enterprise API users.",
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "An ID or a slug identifying this Game.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/GameSingle"
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Game.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/games/{id}/twitch": {
      "get": {
        "operationId": "games_twitch_read",
        "summary": "Get streams on Twitch associated with the game, available only for business and enterprise API users.",
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "An ID or a slug identifying this Game.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Twitch"
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Game.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/games/{id}/youtube": {
      "get": {
        "operationId": "games_youtube_read",
        "summary": "Get videos from YouTube associated with the game, available only for business and enterprise API users.",
        "description": "",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "An ID or a slug identifying this Game.",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/Youtube"
            }
          }
        },
        "tags": [
          "games"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Game.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/genres": {
      "get": {
        "operationId": "genres_list",
        "summary": "Get a list of video game genres.",
        "description": "",
        "parameters": [
          {
            "name": "ordering",
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "required": false,
            "type": "string"
          },
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Genre"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "genres"
        ]
      },
      "parameters": []
    },
    "/genres/{id}": {
      "get": {
        "operationId": "genres_read",
        "summary": "Get details of the genre.",
        "description": "",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/GenreSingle"
            }
          }
        },
        "tags": [
          "genres"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Genre.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/platforms": {
      "get": {
        "operationId": "platforms_list",
        "summary": "Get a list of video game platforms.",
        "description": "",
        "parameters": [
          {
            "name": "ordering",
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "required": false,
            "type": "string"
          },
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Platform"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "platforms"
        ]
      },
      "parameters": []
    },
    "/platforms/lists/parents": {
      "get": {
        "operationId": "platforms_lists_parents_list",
        "summary": "Get a list of parent platforms.",
        "description": "For instance, for PS2 and PS4 the “parent platform” is PlayStation.",
        "parameters": [
          {
            "name": "ordering",
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "required": false,
            "type": "string"
          },
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/PlatformParentSingle"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "platforms"
        ]
      },
      "parameters": []
    },
    "/platforms/{id}": {
      "get": {
        "operationId": "platforms_read",
        "summary": "Get details of the platform.",
        "description": "",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/PlatformSingle"
            }
          }
        },
        "tags": [
          "platforms"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Platform.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/publishers": {
      "get": {
        "operationId": "publishers_list",
        "summary": "Get a list of video game publishers.",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Publisher"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "publishers"
        ]
      },
      "parameters": []
    },
    "/publishers/{id}": {
      "get": {
        "operationId": "publishers_read",
        "summary": "Get details of the publisher.",
        "description": "",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/PublisherSingle"
            }
          }
        },
        "tags": [
          "publishers"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Publisher.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/stores": {
      "get": {
        "operationId": "stores_list",
        "summary": "Get a list of video game storefronts.",
        "description": "",
        "parameters": [
          {
            "name": "ordering",
            "in": "query",
            "description": "Which field to use when ordering the results.",
            "required": false,
            "type": "string"
          },
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Store"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "stores"
        ]
      },
      "parameters": []
    },
    "/stores/{id}": {
      "get": {
        "operationId": "stores_read",
        "summary": "Get details of the store.",
        "description": "",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/StoreSingle"
            }
          }
        },
        "tags": [
          "stores"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Store.",
          "required": true,
          "type": "integer"
        }
      ]
    },
    "/tags": {
      "get": {
        "operationId": "tags_list",
        "summary": "Get a list of tags.",
        "description": "",
        "parameters": [
          {
            "name": "page",
            "in": "query",
            "description": "A page number within the paginated result set.",
            "required": false,
            "type": "integer"
          },
          {
            "name": "page_size",
            "in": "query",
            "description": "Number of results to return per page.",
            "required": false,
            "type": "integer"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "required": [
                "count",
                "results"
              ],
              "type": "object",
              "properties": {
                "count": {
                  "type": "integer"
                },
                "next": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "previous": {
                  "type": "string",
                  "format": "uri",
                  "x-nullable": true
                },
                "results": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/Tag"
                  }
                }
              }
            }
          }
        },
        "tags": [
          "tags"
        ]
      },
      "parameters": []
    },
    "/tags/{id}": {
      "get": {
        "operationId": "tags_read",
        "summary": "Get details of the tag.",
        "description": "",
        "parameters": [],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "#/definitions/TagSingle"
            }
          }
        },
        "tags": [
          "tags"
        ]
      },
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "description": "A unique integer value identifying this Tag.",
          "required": true,
          "type": "integer"
        }
      ]
    }
  },
  "definitions": {
    "Position": {
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        }
      }
    },
    "Person": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "image": {
          "title": "Image",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        }
      }
    },
    "PersonSingle": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "image": {
          "title": "Image",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string",
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "reviews_count": {
          "title": "Reviews count",
          "type": "integer",
          "readOnly": true
        },
        "rating": {
          "title": "Rating",
          "type": "string",
          "format": "decimal",
          "readOnly": true
        },
        "rating_top": {
          "title": "Rating top",
          "type": "integer",
          "readOnly": true
        },
        "updated": {
          "title": "Updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        }
      }
    },
    "Developer": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        }
      }
    },
    "DeveloperSingle": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string"
        }
      }
    },
    "Game": {
      "required": [
        "rating"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "name": {
          "title": "Name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "released": {
          "title": "Released",
          "type": "string",
          "format": "date",
          "readOnly": true
        },
        "tba": {
          "title": "TBA",
          "type": "boolean",
          "readOnly": true
        },
        "background_image": {
          "title": "Background image",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "rating": {
          "title": "Rating",
          "type": "number"
        },
        "rating_top": {
          "title": "Rating top",
          "type": "integer",
          "readOnly": true
        },
        "ratings": {
          "title": "Ratings",
          "type": "object",
          "readOnly": true
        },
        "ratings_count": {
          "title": "Ratings count",
          "type": "integer",
          "readOnly": true
        },
        "reviews_text_count": {
          "title": "Reviews text count",
          "type": "string",
          "readOnly": true
        },
        "added": {
          "title": "Added",
          "type": "integer",
          "readOnly": true
        },
        "added_by_status": {
          "title": "Added by status",
          "type": "object",
          "readOnly": true
        },
        "metacritic": {
          "title": "Metacritic",
          "type": "integer",
          "readOnly": true
        },
        "playtime": {
          "title": "Playtime",
          "description": "in hours",
          "type": "integer",
          "readOnly": true
        },
        "suggestions_count": {
          "title": "Suggestions count",
          "type": "integer",
          "readOnly": true
        },
        "updated": {
          "title": "Updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "esrb_rating": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "slug": {
              "type": "string",
              "enum": [
                "everyone",
                "everyone-10-plus",
                "teen",
                "mature",
                "adults-only",
                "rating-pending"
              ]
            },
            "name": {
              "type": "string",
              "enum": [
                "Everyone",
                "Everyone 10+",
                "Teen",
                "Mature",
                "Adults Only",
                "Rating Pending"
              ]
            }
          },
          "x-nullable": true
        },
        "platforms": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "platform": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  }
                }
              },
              "released_at": {
                "type": "string",
                "x-nullable": true
              },
              "requirements": {
                "type": "object",
                "properties": {
                  "minimum": {
                    "type": "string"
                  },
                  "recommended": {
                    "type": "string"
                  }
                },
                "x-nullable": true
              }
            }
          }
        }
      }
    },
    "GamePersonList": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "image": {
          "title": "Image",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        }
      }
    },
    "ScreenShot": {
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "image": {
          "title": "Image",
          "description": "An image file with size up to 20 MB.",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "hidden": {
          "title": "Hidden",
          "description": "Set image as hidden or visible.",
          "type": "boolean",
          "default": false
        },
        "width": {
          "title": "Width",
          "type": "integer",
          "readOnly": true
        },
        "height": {
          "title": "Height",
          "type": "integer",
          "readOnly": true
        }
      },
      "example": {
        "image": "@image.jpg",
        "hidden": false
      }
    },
    "GameStoreFull": {
      "required": [
        "url"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "game_id": {
          "title": "Game id",
          "type": "string",
          "readOnly": true
        },
        "store_id": {
          "title": "Store id",
          "type": "string",
          "readOnly": true
        },
        "url": {
          "title": "Url",
          "type": "string",
          "format": "uri",
          "maxLength": 500,
          "minLength": 1
        }
      }
    },
    "GamePlatformMetacritic": {
      "type": "object",
      "properties": {
        "metascore": {
          "title": "Metascore",
          "type": "integer",
          "readOnly": true
        },
        "url": {
          "title": "Url",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        }
      }
    },
    "GameSingle": {
      "required": [
        "rating"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "name": {
          "title": "Name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "name_original": {
          "title": "Name original",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "metacritic": {
          "title": "Metacritic",
          "type": "integer",
          "readOnly": true
        },
        "metacritic_platforms": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/GamePlatformMetacritic"
          },
          "readOnly": true
        },
        "released": {
          "title": "Released",
          "type": "string",
          "format": "date",
          "readOnly": true
        },
        "tba": {
          "title": "TBA",
          "type": "boolean",
          "readOnly": true
        },
        "updated": {
          "title": "Updated",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "background_image": {
          "title": "Background image",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "background_image_additional": {
          "title": "Background image additional",
          "type": "string",
          "readOnly": true
        },
        "website": {
          "title": "Website",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "rating": {
          "title": "Rating",
          "type": "number"
        },
        "rating_top": {
          "title": "Rating top",
          "type": "integer",
          "readOnly": true
        },
        "ratings": {
          "title": "Ratings",
          "type": "object",
          "readOnly": true
        },
        "reactions": {
          "title": "Reactions",
          "type": "object",
          "readOnly": true
        },
        "added": {
          "title": "Added",
          "type": "integer",
          "readOnly": true
        },
        "added_by_status": {
          "title": "Added by status",
          "type": "object",
          "readOnly": true
        },
        "playtime": {
          "title": "Playtime",
          "description": "in hours",
          "type": "integer",
          "readOnly": true
        },
        "screenshots_count": {
          "title": "Screenshots count",
          "type": "integer",
          "readOnly": true
        },
        "movies_count": {
          "title": "Movies count",
          "type": "integer",
          "readOnly": true
        },
        "creators_count": {
          "title": "Creators count",
          "type": "integer",
          "readOnly": true
        },
        "achievements_count": {
          "title": "Achievements count",
          "type": "integer",
          "readOnly": true
        },
        "parent_achievements_count": {
          "title": "Parent achievements count",
          "type": "string",
          "readOnly": true
        },
        "reddit_url": {
          "title": "Reddit url",
          "description": "For example \"https://www.reddit.com/r/uncharted/\" or \"uncharted\"",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "reddit_name": {
          "title": "Reddit name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "reddit_description": {
          "title": "Reddit description",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "reddit_logo": {
          "title": "Reddit logo",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "reddit_count": {
          "title": "Reddit count",
          "type": "integer",
          "readOnly": true
        },
        "twitch_count": {
          "title": "Twitch count",
          "type": "string",
          "readOnly": true
        },
        "youtube_count": {
          "title": "Youtube count",
          "type": "string",
          "readOnly": true
        },
        "reviews_text_count": {
          "title": "Reviews text count",
          "type": "string",
          "readOnly": true
        },
        "ratings_count": {
          "title": "Ratings count",
          "type": "integer",
          "readOnly": true
        },
        "suggestions_count": {
          "title": "Suggestions count",
          "type": "integer",
          "readOnly": true
        },
        "alternative_names": {
          "type": "array",
          "items": {
            "title": "Alternative names",
            "type": "string",
            "maxLength": 200,
            "minLength": 1
          },
          "readOnly": true
        },
        "metacritic_url": {
          "title": "Metacritic url",
          "description": "For example \"http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt\"",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "parents_count": {
          "title": "Parents count",
          "type": "integer",
          "readOnly": true
        },
        "additions_count": {
          "title": "Additions count",
          "type": "integer",
          "readOnly": true
        },
        "game_series_count": {
          "title": "Game series count",
          "type": "integer",
          "readOnly": true
        },
        "esrb_rating": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "slug": {
              "type": "string",
              "enum": [
                "everyone",
                "everyone-10-plus",
                "teen",
                "mature",
                "adults-only",
                "rating-pending"
              ]
            },
            "name": {
              "type": "string",
              "enum": [
                "Everyone",
                "Everyone 10+",
                "Teen",
                "Mature",
                "Adults Only",
                "Rating Pending"
              ]
            }
          },
          "x-nullable": true
        },
        "platforms": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "platform": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  }
                }
              },
              "released_at": {
                "type": "string",
                "x-nullable": true
              },
              "requirements": {
                "type": "object",
                "properties": {
                  "minimum": {
                    "type": "string"
                  },
                  "recommended": {
                    "type": "string"
                  }
                },
                "x-nullable": true
              }
            }
          }
        }
      }
    },
    "ParentAchievement": {
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "image": {
          "title": "Image",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "percent": {
          "title": "Percent",
          "type": "string",
          "format": "decimal",
          "readOnly": true
        }
      }
    },
    "Movie": {
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "preview": {
          "title": "Preview",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "data": {
          "title": "Data",
          "type": "object",
          "readOnly": true
        }
      }
    },
    "Reddit": {
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "text": {
          "title": "Text",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "image": {
          "title": "Image",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "url": {
          "title": "Url",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "username": {
          "title": "Username",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "username_url": {
          "title": "Username url",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "created": {
          "title": "Created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        }
      }
    },
    "Twitch": {
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "external_id": {
          "title": "External id",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "created": {
          "title": "Created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "published": {
          "title": "Published",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "thumbnail": {
          "title": "Thumbnail",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "view_count": {
          "title": "View count",
          "type": "integer",
          "readOnly": true
        },
        "language": {
          "title": "Language",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        }
      }
    },
    "Youtube": {
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "external_id": {
          "title": "External id",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "channel_id": {
          "title": "Channel id",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "channel_title": {
          "title": "Channel title",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "name": {
          "title": "Name",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        },
        "created": {
          "title": "Created",
          "type": "string",
          "format": "date-time",
          "readOnly": true
        },
        "view_count": {
          "title": "View count",
          "type": "integer",
          "readOnly": true
        },
        "comments_count": {
          "title": "Comments count",
          "type": "integer",
          "readOnly": true
        },
        "like_count": {
          "title": "Like count",
          "type": "integer",
          "readOnly": true
        },
        "dislike_count": {
          "title": "Dislike count",
          "type": "integer",
          "readOnly": true
        },
        "favorite_count": {
          "title": "Favorite count",
          "type": "integer",
          "readOnly": true
        },
        "thumbnails": {
          "title": "Thumbnails",
          "type": "object",
          "readOnly": true
        }
      }
    },
    "Genre": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        }
      }
    },
    "GenreSingle": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string"
        }
      }
    },
    "Platform": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "image": {
          "title": "Image",
          "type": "string",
          "readOnly": true,
          "x-nullable": true,
          "format": "uri"
        },
        "year_start": {
          "title": "Year start",
          "type": "integer",
          "maximum": 32767,
          "minimum": 0,
          "x-nullable": true
        },
        "year_end": {
          "title": "Year end",
          "type": "integer",
          "maximum": 32767,
          "minimum": 0,
          "x-nullable": true
        }
      }
    },
    "PlatformParentSingle": {
      "required": [
        "name",
        "platforms"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "platforms": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Platform"
          }
        }
      }
    },
    "PlatformSingle": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "readOnly": true,
          "format": "uri"
        },
        "description": {
          "title": "Description",
          "type": "string"
        },
        "image": {
          "title": "Image",
          "type": "string",
          "readOnly": true,
          "x-nullable": true,
          "format": "uri"
        },
        "year_start": {
          "title": "Year start",
          "type": "integer",
          "maximum": 32767,
          "minimum": 0,
          "x-nullable": true
        },
        "year_end": {
          "title": "Year end",
          "type": "integer",
          "maximum": 32767,
          "minimum": 0,
          "x-nullable": true
        }
      }
    },
    "Publisher": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        }
      }
    },
    "PublisherSingle": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string"
        }
      }
    },
    "Store": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "domain": {
          "title": "Domain",
          "type": "string",
          "maxLength": 255,
          "x-nullable": true
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        }
      }
    },
    "StoreSingle": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "domain": {
          "title": "Domain",
          "type": "string",
          "maxLength": 255,
          "x-nullable": true
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string"
        }
      }
    },
    "Tag": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "language": {
          "title": "Language",
          "type": "string",
          "readOnly": true,
          "minLength": 1
        }
      }
    },
    "TagSingle": {
      "required": [
        "name"
      ],
      "type": "object",
      "properties": {
        "id": {
          "title": "ID",
          "type": "integer",
          "readOnly": true
        },
        "name": {
          "title": "Name",
          "type": "string",
          "maxLength": 100,
          "minLength": 1
        },
        "slug": {
          "title": "Slug",
          "type": "string",
          "format": "slug",
          "pattern": "^[-a-zA-Z0-9_]+$",
          "readOnly": true,
          "minLength": 1
        },
        "games_count": {
          "title": "Games count",
          "type": "integer",
          "readOnly": true
        },
        "image_background": {
          "title": "Image background",
          "type": "string",
          "format": "uri",
          "readOnly": true,
          "minLength": 1
        },
        "description": {
          "title": "Description",
          "type": "string"
        }
      }
    }
  }
}
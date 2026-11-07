// 16-Bit Pixel Art Multi-Companion Overlay (Foxes, Cats, Chillet + Butterfly, Ball, Dance & Bear Friend)
(function () {
  if (window.__pixelFoxInitialized) return;
  window.__pixelFoxInitialized = true;

  const SPECIES_META = [{"id": "fox", "name": "Red Fox", "icon": "\ud83e\udd8a", "geom": "fox", "bubbleColor": "#ff9e44"}, {"id": "fennec", "name": "Fennec Fox", "icon": "\ud83c\udfdc\ufe0f", "geom": "fennec", "bubbleColor": "#ffd9a6"}, {"id": "arctic", "name": "Arctic Fox", "icon": "\u2744\ufe0f", "geom": "fox", "bubbleColor": "#9ee0ff"}, {"id": "white_cat", "name": "White Cat", "icon": "\ud83d\udc31", "geom": "cat", "bubbleColor": "#f0f7ff"}, {"id": "orange_cat", "name": "Orange Tabby", "icon": "\ud83d\udc08", "geom": "cat", "bubbleColor": "#ffb35c"}, {"id": "grey_cat", "name": "Grey Cat", "icon": "\ud83d\udc3e", "geom": "cat", "bubbleColor": "#bac6d9"}, {"id": "chillet", "name": "Chillet", "icon": "\ud83d\udc09", "geom": "chillet", "bubbleColor": "#73c7ff"}];
  const PALETTES = {"fox": {"K": "#23192d", "N": "#120c1c", "D": "#422518", "M": "#2b160e", "S": "#cf4a19", "O": "#ff6b24", "H": "#ff993b", "Y": "#ffd07b", "W": "#fff8eb", "C": "#ebd9c5", "P": "#ff9ebb", "R": "#ff7597", "B": "#0e2f70", "E": "#1f7ae0", "A": "#66ecff", "G": "#ffffff", "T": "#cf4a19", "V": "#c77dff", "Z": "#ff4d6d"}, "fennec": {"K": "#2a1d17", "N": "#170e0a", "D": "#734222", "M": "#4f2c15", "S": "#d49557", "O": "#f5be7d", "H": "#ffd9a6", "Y": "#fff0d4", "W": "#fffaf0", "C": "#eddcc4", "P": "#ff9ebb", "R": "#ff7597", "B": "#0e2f70", "E": "#1f7ae0", "A": "#66ecff", "G": "#ffffff", "T": "#734222", "V": "#c77dff", "Z": "#ff4d6d"}, "arctic": {"K": "#23293d", "N": "#121624", "D": "#5c7094", "M": "#415270", "S": "#a9c2e6", "O": "#dcebff", "H": "#f0f7ff", "Y": "#ffffff", "W": "#ffffff", "C": "#d9e6f7", "P": "#ff9ebb", "R": "#ff85a8", "B": "#0e2f70", "E": "#2488ff", "A": "#7af0ff", "G": "#ffffff", "T": "#a9c2e6", "V": "#c77dff", "Z": "#ff4d6d"}, "white_cat": {"K": "#282338", "N": "#171224", "D": "#ffffff", "M": "#d7deed", "S": "#cad5eb", "O": "#eef4ff", "H": "#f7faff", "Y": "#ffffff", "W": "#ffffff", "C": "#dce4f5", "P": "#ff9ebb", "R": "#ff7597", "B": "#0e2f70", "E": "#1f7ae0", "A": "#66ecff", "G": "#ffffff", "T": "#dce4f5", "V": "#c77dff", "Z": "#ff4d6d"}, "orange_cat": {"K": "#281b12", "N": "#1a100a", "D": "#fff8eb", "M": "#ebd9c5", "S": "#d95b16", "O": "#ff8524", "H": "#ffa845", "Y": "#ffd480", "W": "#fff8eb", "C": "#ebd9c5", "P": "#ff9ebb", "R": "#ff7597", "B": "#0a4f3c", "E": "#199e72", "A": "#57f2be", "G": "#ffffff", "T": "#b3390c", "V": "#c77dff", "Z": "#ff4d6d"}, "grey_cat": {"K": "#1c202b", "N": "#11141c", "D": "#f0f4fa", "M": "#c5cedb", "S": "#5d687a", "O": "#7e8b9e", "H": "#9aa7ba", "Y": "#bac6d9", "W": "#f0f4fa", "C": "#cfd7e6", "P": "#ff9ebb", "R": "#ff7597", "B": "#13476e", "E": "#2089b8", "A": "#6bf2e6", "G": "#ffffff", "T": "#3f4756", "V": "#c77dff", "Z": "#ff4d6d"}, "chillet": {"K": "#1b2238", "N": "#12182b", "D": "#243b7a", "M": "#1a2b5c", "S": "#499cd6", "O": "#73c7ff", "H": "#9ee0ff", "Y": "#cbf0ff", "W": "#fff9f2", "C": "#e0d8cf", "P": "#3654a3", "R": "#ff6b98", "B": "#182454", "E": "#3256b8", "A": "#73b0ff", "G": "#ffffff", "T": "#243b7a", "V": "#c77dff", "Z": "#ff4d6d"}};
  const GEOMS = {"fox": {"walk1": [".................KK...........KK................", "................KDDK.........KDDK...............", "...............KDDDDK.......KDDDDK..............", "...............KDDDDDK.....KDDDDDDK.............", "..............KDDPPDDDK...KDDPPPDDK.............", "..............KDDPPPPDOK.KDDPPPPDDK.............", "....KKKKKK....KDPPPPPDOKKDPPPPPPDK..............", "..KKWWWWWWKK..KDOOWWWOOOOOOWWWWODK..............", ".KWWWWWWWWWWK.KDOOWWWWOHYYYYHOWWWOOOK...........", "KWWWWWWWWWWWWKKDOOOOOOOHYYYYYYHOOOOOOK..........", "KWWWWWWWWWWWOHKOOOOOOOOHHHHHHHHHYYHOOOOK........", "KWWWWWWWWWWOHHSKOOOOOOHHHHHHHNNNNNNHOOOK........", "KWWWWWWWWWOHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK.......", "KWWWWWWWOHHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK.......", ".KWWWWWOHHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK.......", "..KWWWOHHHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK.......", "...KWOHHHHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK.....", "....KOOHHHHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK.....", ".....KOOOHHHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK.....", "......KOOOHHHHSSK..KWWWWWWWWWWWWWWWWWWWWK.......", ".......KOOOHHHSSK...KKWWWWWWWWWWWWWWWWKK........", "........KOOOHHSSK..KSSSSCCCCWWWWWWWWKK..........", "........KOOOOHHSSKKSOOOOOOOOWWWWWWWWWWK.........", ".........KOOOOHHHHHHOOOOOOOOWWWWWWWWWWWK........", ".........KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWK........", "..........KOOOOOOOOOOOOOOOOOWWWWWWWWWWK.........", "...........KSSOOHHHHHHOOOOOOWWWWWWWWWK..........", "............KSSOOOOOOOOOOOOOWWWWWWWWK...........", ".............KSSOOOOOOWWWWWWWWWWWWWK............", ".............KDDK.KMMKKCCCCWWWWCCCK.............", "............KDDDDKKMMK.KKKKDDK.KMMK.............", "............KKKKK.KKKK....KDDDDKKKK.............", "..........................KKKKK.................", "................................................", "................................................", "................................................"], "walk2": [".................KK...........KK................", "................KDDK.........KDDK...............", "...............KDDDDK.......KDDDDK..............", "...............KDDDDDK.....KDDDDDDK.............", "..............KDDPPDDDK...KDDPPPDDK.............", "....KKKKKK....KDDPPPPDOK.KDDPPPPDDK.............", "..KKWWWWWWKK..KDPPPPPDOKKDPPPPPPDK..............", ".KWWWWWWWWWWK.KDOOWWWOOOOOOWWWWODK..............", "KWWWWWWWWWWWWKKDOOWWWWOHYYYYHOWWWOOOK...........", "KWWWWWWWWWWWOHKDOOOOOOOHYYYYYYHOOOOOOK..........", "KWWWWWWWWWWOHHSKOOOOOOOHHHHHHHHHYYHOOOOK........", "KWWWWWWWWWOHHHSSKOOOOOHHHHHHHNNNNNNHOOOK........", ".KWWWWWWOHHHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK.......", "..KWWWWOHHHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK.......", "...KWWOHHHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK.......", "....KOOHHHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK.......", ".....KOOOHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK.....", "......KOOOHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK.....", ".......KOOOHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK.....", "........KOOOHHSSK..KWWWWWWWWWWWWWWWWWWWWK.......", "........KOOOOHHSK...KKWWWWWWWWWWWWWWWWKK........", ".........KOOOOHSK..KSSSSCCCCWWWWWWWWKK..........", ".........KOOOOOOKKKSOOOOOOOOWWWWWWWWWWK.........", ".........KOOOOOHHHHHOOOOOOOOWWWWWWWWWWWK........", "..........KOOOOOOOOOOOOOOOOOWWWWWWWWWWWK........", "..........KOOOOOOOOOOOOOOOOOWWWWWWWWWWK.........", "...........KSSOOHHHHHHOOOOOOWWWWWWWWWK..........", "............KSSOOOOOOOOOOOOOWWWWWWWWK...........", ".............KSSOOOOOOWWWWWWWWWWWWWK............", "..............KDDKKMMKKCCCCWWWWCCCK.............", "..............KDDDKMMK.KKKKDDK.KMMK.............", "..............KKKKKKKK....KDDDKKKK..............", "..........................KKKK..................", "................................................", "................................................", "................................................"], "walk3": [".................KK...........KK................", "................KDDK.........KDDK...............", "...............KDDDDK.......KDDDDK..............", "...............KDDDDDK.....KDDDDDDK.............", "..............KDDPPDDDK...KDDPPPDDK.............", "..............KDDPPPPDOK.KDDPPPPDDK.............", "....KKKKKK....KDPPPPPDOKKDPPPPPPDK..............", "..KKWWWWWWKK..KDOOWWWOOOOOOWWWWODK..............", ".KWWWWWWWWWWK.KDOOWWWWOHYYYYHOWWWOOOK...........", "KWWWWWWWWWWWWKKDOOOOOOOHYYYYYYHOOOOOOK..........", "KWWWWWWWWWWWOHKOOOOOOOOHHHHHHHHHYYHOOOOK........", "KWWWWWWWWWWOHHSKOOOOOOHHHHHHHNNNNNNHOOOK........", "KWWWWWWWWWOHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK.......", ".KWWWWWWOHHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK.......", "..KWWWWOHHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK.......", "...KWWOHHHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK.......", "....KOOHHHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK.....", ".....KOOOHHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK.....", "......KOOOHHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK.....", ".......KOOOHHHSSK..KWWWWWWWWWWWWWWWWWWWWK.......", "........KOOOHHSSK...KKWWWWWWWWWWWWWWWWKK........", "........KOOOOHHSK..KSSSSCCCCWWWWWWWWKK..........", ".........KOOOOHSSKKSOOOOOOOOWWWWWWWWWWK.........", ".........KOOOOHHHHHHOOOOOOOOWWWWWWWWWWWK........", ".........KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWK........", "..........KOOOOOOOOOOOOOOOOOWWWWWWWWWWK.........", "...........KSSOOHHHHHHOOOOOOWWWWWWWWWK..........", "............KSSOOOOOOOOOOOOOWWWWWWWWK...........", ".............KSSOOOOOOWWWWWWWWWWWWWK............", ".............KMMK.KDDKKCCCCWWWWCCCK.............", "............KMMMK.KDDDKKKKKMMK.KDDK.............", "............KKKK..KKKKK...KMMMKKKKDK............", "..........................KKKK.KKKK.............", "................................................", "................................................", "................................................"], "sit1": ["...............KK...........KK..................", "..............KDDK.........KDDK.................", ".............KDDDDK.......KDDDDK................", ".............KDDDDDK.....KDDDDDDK...............", "............KDDPPDDDK...KDDPPPDDK...............", "............KDDPPPPDOK.KDDPPPPDDK...............", "............KDPPPPPDOKKDPPPPPPDK................", "............KDOOWWWOOOOOOWWWWODK................", "............KDOOWWWWOHYYYYHOWWWOOOK.............", "...KKKKKK..KDOOOOOOOHYYYYYYHOOOOOOK.............", ".KKWWWWWWK.KOOOOOOOOHHHHHHHHHYYHOOOOK...........", "KWWWWWWWWWKOOOOOOOOHHHHHHHNNNNNNHOOOK...........", "KWWWWWWWWOHKOOOOOOHHHHHHHNNGGGBBNHOOOK..........", "KWWWWWWWOHHSKOOOOOHHHHHHHNNGGGBBNHOOOK..........", "KWWWWWWOHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK..........", ".KWWWWOHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK..........", "..KWWOHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK........", "...KOOHHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK........", "....KOOOHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK........", ".....KOOOHHSSK..KWWWWWWWWWWWWWWWWWWWWK..........", "......KOOOHSSK...KKWWWWWWWWWWWWWWWWKK...........", ".......KOOOHSSK..KSSSSCCCCWWWWWWWWKK............", "........KOOOHSSKKSOOOOOOOOWWWWWWWWWWK...........", ".........KOOOHSSKSOOOOOHHOWWWWWWWWWWWK..........", "..........KOOOHSSSOOOOOHHOWWWWWWWWWWWK..........", "...........KSSSOOOOOOOOOOOWWWWWWWWWWK...........", "............KKKKSSOOOOOOOOWWWWWWWWWK............", "................KKDDDDKKKKKDDDDDDK..............", ".................KDDDDDK..KDDDDDDK..............", ".................KKKKKK...KKKKKKKK..............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sit2": ["...............KK...........KK..................", "..............KDDK.........KDDK.................", ".............KDDDDK.......KDDDDK................", ".............KDDDDDK.....KDDDDDDK...............", "............KDDPPDDDK...KDDPPPDDK...............", "............KDDPPPPDOK.KDDPPPPDDK...............", "............KDPPPPPDOKKDPPPPPPDK................", "...KKKKKK...KDOOWWWOOOOOOWWWWODK................", ".KKWWWWWWK..KDOOWWWWOHYYYYHOWWWOOOK.............", "KWWWWWWWWWK.KDOOOOOOOHYYYYYYHOOOOOOK............", "KWWWWWWWWOHKOOOOOOOOHHHHHHHHHYYHOOOOK...........", "KWWWWWWWOHHSKOOOOOOHHHHHHHSSSSSSHOOOK...........", "KWWWWWWOHHHSSKOOOOOHHHHHHOOOOOOOHOOOK...........", ".KWWWWOHHHHSSKOOOOHHHHHHHNNNNNNNHOOOK...........", "..KWWOHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK..........", "...KOOHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK..........", "....KOOOHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK........", ".....KOOOHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK........", "......KOOOHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK........", ".......KOOOHSK..KWWWWWWWWWWWWWWWWWWWWK..........", "........KOOOHSK..KKWWWWWWWWWWWWWWWWKK...........", ".........KOOOOK..KSSSSCCCCWWWWWWWWKK............", ".........KOOOOOKKSOOOOOOOOWWWWWWWWWWK...........", "..........KOOOOOKSOOOOOHHOWWWWWWWWWWWK..........", "...........KSSSSKSOOOOOHHOWWWWWWWWWWWK..........", "............KKKKKSOOOOOOOOWWWWWWWWWWK...........", "................KSSOOOOOOOWWWWWWWWWK............", "................KKDDDDKKKKKDDDDDDK..............", ".................KDDDDDK..KDDDDDDK..............", ".................KKKKKK...KKKKKKKK..............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sleep1": ["................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", ".................KK...........KK................", "................KDDK.........KDDK...............", "...............KDDDDK.......KDDDDK..............", ".......KKKKKK..KDDDDDK.....KDDDDDDK.............", ".....KKOOOOOOKKDDPPDDDK...KDDPPPDDK.............", "....KOOOOOOOOOKDDPPPPDOK.KDDPPPPDDK.............", "...KOOOOOHHHHHOKDPPPPPDOKKDPPPPPPDK.............", "..KOOOOOHHHHHHHOKDOOWWWOOOOOOWWWWODK............", ".KOOOOOHHHHHHHHHHDOOWWWWOHYYYYHOWWWOOOK.........", ".KOOOOOHHHHHHHHHHHHOOOOOOHYYYYYYHOOOOOOK........", "KSOOOOOHHHHHHHHHHHHHHHHHHHSSSSSSHOOOOOOK.KKKK...", ".KSOOOOOHHHHHHHSSSSOOOOOHNNNNNNHHOOOOONNKKWWWK..", "..KSOOOOOOHHHSSSSSSOOOWWHHHHHHHHWWWWWWNNKWWWWWK.", "..KSSOOOOOOHSSSSKKKKWWWWWWWRRRWWWWWWWWKKWWWWWWWK", "...KSSOOOOOHSKKOOOOOKKWWWWWWRRRWWWWWWKKWWWWWWWWK", "...KSSSOOOOOHKOOOOOOOOKKKKKCCCCCCKKKKKWWWWWWWWWK", "....KSSSSOOOOKOOOOOHHHHHHHHOOOOOOHHWWWWWWWWWWWWK", ".....KKKSSSSOOOHHHHHHHHHHHHHHHHHHHOWWWWWWWWWWWWK", "........KKKSSSSOOOOOOHHHHHHHHHHHOWWWWWWWWWWWWWK.", "...........KKKSSSSOOOOOOOOOOOOOHWWWWWWWWWWWWWK..", "..............KKKKSSSSOOOOOOOOOWWWWWWWWWWWWWK...", "..................KKKKKKCCCCCCCWWWWWWWWWWWKK....", "........................KKKKKKKKKKKKKKKKKK......", "................................................", "................................................", "................................................"], "sleep2": ["................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", ".................KK...........KK................", "................KDDK.........KDDK...............", "...............KDDDDK.......KDDDDK..............", ".......KKKKKK..KDDDDDK.....KDDDDDDK.............", ".....KKOOOOOOKKDDPPDDDK...KDDPPPDDK.............", "....KOOOOOOOOOKDDPPPPDOK.KDDPPPPDDK.............", "...KOOOOOHHHHHOKDPPPPPDOKKDPPPPPPDK.............", "..KOOOOOHHHHHHHOKDOOWWWOOOOOOWWWWODK............", ".KOOOOOHHHHHHHHHHDOOWWWWOHYYYYHOWWWOOOK..KKKK...", "KSOOOOOHHHHHHHHHHHHOOOOOOHYYYYYYHOOOOOOKKWWWWK..", ".KSOOOOOHHHHHHHHHHHHHHHHHHSSSSSSHOOOOOOKWWWWWWK.", "..KSOOOOOHHHHHHSSSSOOOOOHNNNNNNHHOOOOONNKWWWWWWK", "..KSSOOOOOOHHSSSSSSOOOWWHHHHHHHHWWWWWWNNKWWWWWWK", "...KSSOOOOOHSSSSKKKKWWWWWWWRRRWWWWWWWWKKWWWWWWWK", "...KSSSOOOOOHSKKOOOOKKWWWWWWRRRWWWWWWKKWWWWWWWWK", "....KSSSSOOOOHKOOOOOOOKKKKKCCCCCCKKKKKWWWWWWWWWK", ".....KKKSSSSOOOKOOOOHHHHHHHHOOOOOHHWWWWWWWWWWWK.", "........KKKSSSSOOHHHHHHHHHHHHHHHHOWWWWWWWWWWWWK.", "...........KKKSSSSOOOOOHHHHHHHHHOWWWWWWWWWWWWK..", "..............KKKKSSSSOOOOOOOOOOWWWWWWWWWWWWK...", "..................KKKKKKCCCCCCCWWWWWWWWWWWKK....", "........................KKKKKKKKKKKKKKKKKK......", "................................................", "................................................", "................................................"], "jump1": ["...................KK...........KK..............", "..................KDDK.........KDDK.............", ".................KDDDDK.......KDDDDK............", "....KKKKKK.......KDDDDDK.....KDDDDDDK...........", "..KKWWWWWWKK....KDDPPDDDK...KDDPPPDDK...........", ".KWWWWWWWWWWK...KDDPPPPDOK.KDDPPPPDDK...........", "KWWWWWWWWWWWWK..KDPPPPPDOKKDPPPPPPDK............", "KWWWWWWWWWWWOHK.KDOOWWWOOOOOOWWWWODK............", "KWWWWWWWWWWOHHSKKDOOWWWWOHYYYYHOWWWOOOK.........", ".KWWWWWWWWOHHHSSKDOOOOOOOHYYYYYYHOOOOOOK........", "..KWWWWWWOHHHHSSKOOOOOOOOHHHHHHHHHYYHOOOOK......", "...KWWWWOHHHHHSSKOOOOOOHHHHHHHNNNNNNHOOOK.......", "....KWWOHHHHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK.......", ".....KOOHHHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK.......", "......KOOOHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK.......", ".......KOOOHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK.......", "........KOOOHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK.....", ".........KOOOHSSKKWWWWWWWRRRHEAAAAGWWWWONNK.....", "..........KOOOOHSK.KWWWWWWRRRWWAAAAWWWWWWWKK....", "..........KOOOOOOK..KWWWWWWWWWWWWWWWWWWWWK......", "..........KOOOOOOOK..KKWWWWWWWWWWWWWWWWKK.......", "..........KOOOOOOOOK.KSSSSCCCCWWWWWWWWKK........", "...........KOOOOOOOOKKSOOOOOOOOWWWWWWWWWWK......", "...........KOOOOOOOOOHHHHHHOOOOWWWWWWWWWWWK.....", "............KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWK.....", ".............KSSOOHHHHHHOOOOOOWWWWWWWWWWWK......", "..............KSSOOOOOOOOOOOOOWWWWWWWWWWK.......", ".............KDDKSSOOOOOOWWWWWWWWWWWWWK.........", "............KDDDDK.KKKKKCCCCWWWWCCCKDDK.........", "...........KDDDDDK......KKKKKKKKK..KDDDDK.......", "...........KKKKKK...................KKKKK.......", "................................................", "................................................", "................................................", "................................................", "................................................"], "dance1": [".................KK...........KK................", "................KDDK.........KDDK...............", "...............KDDDDK.......KDDDDK..............", "....KKKKKK.....KDDDDDK.....KDDDDDDK.............", "..KKWWWWWWKK..KDDPPDDDK...KDDPPPDDK.............", ".KWWWWWWWWWWK.KDDPPPPDOK.KDDPPPPDDK.............", "KWWWWWWWWWWWWKKDPPPPPDOKKDPPPPPPDK..............", "KWWWWWWWWWWWOHKDOOWWWOOOOOOWWWWODK..............", "KWWWWWWWWWWOHHSKDOOWWWWOHYYYYHOWWWOOOK..........", ".KWWWWWWWWOHHHSSKDOOOOOOHYYYYYYHOOOOOOK.........", "..KWWWWWWOHHHHSSKOOOOOOOOHHHHHHHHHYYHOOOOK......", "...KWWWWOHHHHHSSKOOOOOOHHHHHHHNNNNNNHOOOK.......", "....KWWOHHHHHHSSKOOOOOHHHHHHNNHHHHHHNHOOOK......", ".....KOOHHHHHHSSKOOOOHHHHHHNHHHHHHHHNHHOOOK.....", "......KOOOHHHHSSKOOOHWWHHHHNHHHHHHHHNHOOOK......", ".......KOOOHHHSSKOOWWWWWHHHHHHHHHHHHHWWONNK.....", "........KOOOHHSSKWWWWWWWWHHHRRRHHHHWWWWONNK.....", ".........KOOOHSSKKWWWWWWWRRRRRRWWWWWWWWWWKK.....", "..........KOOOOHSK.KWWWWWWWWWWWWWWWWWWWWK.......", "..........KOOOOOOK..KKWWWWWWWWWWWWWWWWKK........", "..........KOOOOOOOK...KSSSSCCCCWWWWWWKK..KKK....", "...........KOOOOOOOK.KSOOOOOOOOWWWWWWWK.KDDDK...", "...........KOOOOOOOOHHHHHHOOOOOWWWWWWWKKDDDDK...", "............KOOOOOOOOOOOOOOOOOOWWWWWWWWWWDDK....", ".............KSSOOHHHHHHOOOOOOWWWWWWWWWWWKK.....", "..............KSSOOOOOOOOOOOOOWWWWWWWWWWKKK.....", "...............KSSOOOOOOWWWWWWWWWWWWWWKMMK......", "...............KDDK..KKKKCCCCWWWWCCCCKMMMK......", "..............KDDDDK.....KKKKKDDK....KKKK.......", ".............KDDDDDK........KDDDDK..............", ".............KKKKKK.........KKKKK...............", "................................................", "................................................", "................................................", "................................................", "................................................"], "dance2": ["................................................", "..................KK...........KK...............", ".................KDDK.........KDDK..............", "................KDDDDK.......KDDDDK.............", "................KDDDDDK.....KDDDDDDK............", "...............KDDPPDDDK...KDDPPPDDK............", "...............KDDPPPPDOK.KDDPPPPDDK............", "...............KDPPPPPDOKKDPPPPPPDK.............", ".....KKKKKK....KDOOWWWOOOOOOWWWWODK.............", "...KKWWWWWWKK.KDOOWWWWOHYYYYHOWWWOOOK...........", "..KWWWWWWWWWWKKDOOOOOOOHYYYYYYHOOOOOOK..........", ".KWWWWWWWWWWWOHKOOOOOOOOHHHHHHHHHYYHOOOOK.......", ".KWWWWWWWWWWOHHSKOOOOOOHHHHHHHNNNNNNHOOOK.......", "..KWWWWWWWWOHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK......", "...KWWWWWWOHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK......", "....KWWWWOHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK......", ".....KWWOHHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK......", "......KOOHHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK....", ".......KOOOHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK....", "........KOOOHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK....", ".........KOOOHHSSK..KWWWWWWWWWWWWWWWWWWWWK..KKK.", ".........KOOOOHHSK...KKWWWWWWWWWWWWWWWWKK..KDDDK", "..........KOOOOHSSK..KSSSSCCCCWWWWWWWWKK..KDDDDK", "..........KOOOOOHSSKKSOOOOOOOOWWWWWWWWWKKKDDDDK.", "...........KOOOOHHHHHHOOOOOOOOWWWWWWWWWWWWWKK...", "...........KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWKK.....", "............KSSOOHHHHHHOOOOOOWWWWWWWWWWWK.......", ".............KSSOOOOOOOOOOOOOWWWWWWWWWWK........", "..............KSSOOOOOOWWWWWWWWWWWWWWWK.........", ".............KMMK..KKKKCCCCWWWWCCCKDDK..........", "............KMMMK......KKKKKKKKK..KDDDDK........", "............KKKK..................KKKKK.........", "................................................", "................................................", "................................................", "................................................"]}, "fennec": {"walk1": ["...........KKKKK...............KKKKK............", "..........KDDDDDK.............KDDDDDK...........", ".........KDDPPPDDK...........KDDPPPDDK..........", "........KDDPPPPPDDK.........KDDPPPPPDDK.........", "........KDPPPPPPPDOK.......KDOOPPPPPPDDK........", ".......KDPPPPPPPPPDOK.....KDOOPPPPPPPPDDK.......", "....KKKKDPPPPPPPPPPDOK...KDOOPPPPPPPPPDDK.......", "..KKTTTTKDPPPPPPPPPDOKK.KKDOPPPPPPPPPPDDK.......", ".KTTTTTTTKDOOWWWWWOOOOOKOOOOOWWWWWPPPDDK........", "KTTTTTTTTOKDOOWWWWOHYYYYHOWWWOOOOOWWODK.........", "KTTTTTTTTTTTOHKOOOOOOOOHHHHHHHHHYYHOOOOK........", "KTTTTTTWWWWOHHSKOOOOOOHHHHHHHNNNNNNHOOOK........", "KTTTTTTWWWOHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK.......", "KWWWWWWWOHHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK.......", ".KWWWWWOHHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK.......", "..KWWWOHHHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK.......", "...KWOHHHHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK.....", "....KOOHHHHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK.....", ".....KOOOHHHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK.....", "......KOOOHHHHSSK..KWWWWWWWWWWWWWWWWWWWWK.......", ".......KOOOHHHSSK...KKWWWWWWWWWWWWWWWWKK........", "........KOOOHHSSK..KSSSSCCCCWWWWWWWWKK..........", "........KOOOOHHSSKKSOOOOOOOOWWWWWWWWWWK.........", ".........KOOOOHHHHHHOOOOOOOOWWWWWWWWWWWK........", ".........KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWK........", "..........KOOOOOOOOOOOOOOOOOWWWWWWWWWWK.........", "...........KSSOOHHHHHHOOOOOOWWWWWWWWWK..........", "............KSSOOOOOOOOOOOOOWWWWWWWWK...........", ".............KSSOOOOOOWWWWWWWWWWWWWK............", ".............KDDK.KMMKKCCCCWWWWCCCK.............", "............KDDDDKKMMK.KKKKDDK.KMMK.............", "............KKKKK.KKKK....KDDDDKKKK.............", "..........................KKKKK.................", "................................................", "................................................", "................................................"], "walk2": ["...........KKKKK...............KKKKK............", "..........KDDDDDK.............KDDDDDK...........", ".........KDDPPPDDK...........KDDPPPDDK..........", "........KDDPPPPPDDK.........KDDPPPPPDDK.........", "........KDPPPPPPPDOK.......KDOOPPPPPPDDK........", ".......KDPPPPPPPPPDOK.....KDOOPPPPPPPPDDK.......", "....KKKKDPPPPPPPPPPDOK...KDOOPPPPPPPPPDDK.......", "..KKTTTTKDPPPPPPPPPDOKK.KKDOPPPPPPPPPPDDK.......", ".KTTTTTTTKDOOWWWWWOOOOOKOOOOOWWWWWPPPDDK........", "KTTTTTTTTOKDOOWWWWOHYYYYHOWWWOOOOOWWODK.........", "KTTTTTTWWWWOHHSKOOOOOOOHHHHHHHHHYYHOOOOK........", "KTTTTTTWWWOHHHSSKOOOOOHHHHHHHNNNNNNHOOOK........", ".KTTTTTTOHHHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK.......", "..KWWWWOHHHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK.......", "...KWWOHHHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK.......", "....KOOHHHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK.......", ".....KOOOHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK.....", "......KOOOHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK.....", ".......KOOOHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK.....", "........KOOOHHSSK..KWWWWWWWWWWWWWWWWWWWWK.......", "........KOOOOHHSK...KKWWWWWWWWWWWWWWWWKK........", ".........KOOOOHSK..KSSSSCCCCWWWWWWWWKK..........", ".........KOOOOOOKKKSOOOOOOOOWWWWWWWWWWK.........", ".........KOOOOOHHHHHOOOOOOOOWWWWWWWWWWWK........", "..........KOOOOOOOOOOOOOOOOOWWWWWWWWWWWK........", "..........KOOOOOOOOOOOOOOOOOWWWWWWWWWWK.........", "...........KSSOOHHHHHHOOOOOOWWWWWWWWWK..........", "............KSSOOOOOOOOOOOOOWWWWWWWWK...........", ".............KSSOOOOOOWWWWWWWWWWWWWK............", "..............KDDKKMMKKCCCCWWWWCCCK.............", "..............KDDDKMMK.KKKKDDK.KMMK.............", "..............KKKKKKKK....KDDDKKKK..............", "..........................KKKK..................", "................................................", "................................................", "................................................"], "walk3": ["...........KKKKK...............KKKKK............", "..........KDDDDDK.............KDDDDDK...........", ".........KDDPPPDDK...........KDDPPPDDK..........", "........KDDPPPPPDDK.........KDDPPPPPDDK.........", "........KDPPPPPPPDOK.......KDOOPPPPPPDDK........", ".......KDPPPPPPPPPDOK.....KDOOPPPPPPPPDDK.......", "....KKKKDPPPPPPPPPPDOK...KDOOPPPPPPPPPDDK.......", "..KKTTTTKDPPPPPPPPPDOKK.KKDOPPPPPPPPPPDDK.......", ".KTTTTTTTKDOOWWWWWOOOOOKOOOOOWWWWWPPPDDK........", "KTTTTTTTTOKDOOWWWWOHYYYYHOWWWOOOOOWWODK.........", "KTTTTTTTTTTTOHKOOOOOOOOHHHHHHHHHYYHOOOOK........", "KTTTTTTWWWWOHHSKOOOOOOHHHHHHHNNNNNNHOOOK........", "KTTTTTTWWWOHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK.......", ".KWWWWWWOHHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK.......", "..KWWWWOHHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK.......", "...KWWOHHHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK.......", "....KOOHHHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK.....", ".....KOOOHHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK.....", "......KOOOHHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK.....", ".......KOOOHHHSSK..KWWWWWWWWWWWWWWWWWWWWK.......", "........KOOOHHSSK...KKWWWWWWWWWWWWWWWWKK........", "........KOOOOHHSK..KSSSSCCCCWWWWWWWWKK..........", ".........KOOOOHSSKKSOOOOOOOOWWWWWWWWWWK.........", ".........KOOOOHHHHHHOOOOOOOOWWWWWWWWWWWK........", ".........KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWK........", "..........KOOOOOOOOOOOOOOOOOWWWWWWWWWWK.........", "...........KSSOOHHHHHHOOOOOOWWWWWWWWWK..........", "............KSSOOOOOOOOOOOOOWWWWWWWWK...........", ".............KSSOOOOOOWWWWWWWWWWWWWK............", ".............KMMK.KDDKKCCCCWWWWCCCK.............", "............KMMMK.KDDDKKKKKMMK.KDDK.............", "............KKKK..KKKKK...KMMMKKKKDK............", "..........................KKKK.KKKK.............", "................................................", "................................................", "................................................"], "sit1": [".........KKKKK...............KKKKK..............", "........KDDDDDK.............KDDDDDK.............", ".......KDDPPPDDK...........KDDPPPDDK............", "......KDDPPPPPDDK.........KDDPPPPPDDK...........", "......KDPPPPPPPDOK.......KDOOPPPPPPDDK..........", ".....KDPPPPPPPPPDOK.....KDOOPPPPPPPPDDK.........", ".....KDPPPPPPPPPPDOK...KDOOPPPPPPPPPDDK.........", "...KKKKDPPPPPPPPPDOKK.KKDOPPPPPPPPPPDDK.........", ".KKTTTTKDOOWWWWWOOOOOOKOOOOOWWWWWPPPDDK.........", "KTTTTTTTKDOOWWWWOHYYYYHOWWWOOOOOWWODKK..........", ".KKTTTTTTK.KOOOOOOOOHHHHHHHHHYYHOOOOK...........", "KTTTTTTWWWKOOOOOOOOHHHHHHHNNNNNNHOOOK...........", "KTTTTTTWWOHKOOOOOOHHHHHHHNNGGGBBNHOOOK..........", "KWWWWWWWOHHSKOOOOOHHHHHHHNNGGGBBNHOOOK..........", "KWWWWWWOHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK..........", ".KWWWWOHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK..........", "..KWWOHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK........", "...KOOHHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK........", "....KOOOHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK........", ".....KOOOHHSSK..KWWWWWWWWWWWWWWWWWWWWK..........", "......KOOOHSSK...KKWWWWWWWWWWWWWWWWKK...........", ".......KOOOHSSK..KSSSSCCCCWWWWWWWWKK............", "........KOOOHSSKKSOOOOOOOOWWWWWWWWWWK...........", ".........KOOOHSSKSOOOOOHHOWWWWWWWWWWWK..........", "..........KOOOHSSSOOOOOHHOWWWWWWWWWWWK..........", "...........KSSSOOOOOOOOOOOWWWWWWWWWWK...........", "............KKKKSSOOOOOOOOWWWWWWWWWK............", "................KKDDDDKKKKKDDDDDDK..............", ".................KDDDDDK..KDDDDDDK..............", ".................KKKKKK...KKKKKKKK..............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sit2": [".........KKKKK...............KKKKK..............", "........KDDDDDK.............KDDDDDK.............", ".......KDDPPPDDK...........KDDPPPDDK............", "......KDDPPPPPDDK.........KDDPPPPPDDK...........", "......KDPPPPPPPDOK.......KDOOPPPPPPDDK..........", ".....KDPPPPPPPPPDOK.....KDOOPPPPPPPPDDK.........", ".....KDPPPPPPPPPPDOK...KDOOPPPPPPPPPDDK.........", "...KKKKDPPPPPPPPPDOKK.KKDOPPPPPPPPPPDDK.........", ".KKTTTTKDOOWWWWWOOOOOOKOOOOOWWWWWPPPDDK.........", "KTTTTTTTKDOOWWWWOHYYYYHOWWWOOOOOWWODKK..........", "KTTTTTTWWOHKOOOOOOOOHHHHHHHHHYYHOOOOK...........", "KTTTTTTWOHHSKOOOOOOHHHHHHHSSSSSSHOOOK...........", "KTTTTTTOHHHSSKOOOOOHHHHHHOOOOOOOHOOOK...........", ".KWWWWOHHHHSSKOOOOHHHHHHHNNNNNNNHOOOK...........", "..KWWOHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK..........", "...KOOHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK..........", "....KOOOHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK........", ".....KOOOHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK........", "......KOOOHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK........", ".......KOOOHSK..KWWWWWWWWWWWWWWWWWWWWK..........", "........KOOOHSK..KKWWWWWWWWWWWWWWWWKK...........", ".........KOOOOK..KSSSSCCCCWWWWWWWWKK............", ".........KOOOOOKKSOOOOOOOOWWWWWWWWWWK...........", "..........KOOOOOKSOOOOOHHOWWWWWWWWWWWK..........", "...........KSSSSKSOOOOOHHOWWWWWWWWWWWK..........", "............KKKKKSOOOOOOOOWWWWWWWWWWK...........", "................KSSOOOOOOOWWWWWWWWWK............", "................KKDDDDKKKKKDDDDDDK..............", ".................KDDDDDK..KDDDDDDK..............", ".................KKKKKK...KKKKKKKK..............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sleep1": ["................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "...........KKKKK...............KKKKK............", "..........KDDDDDK.............KDDDDDK...........", ".........KDDPPPDDK...........KDDPPPDDK..........", ".......KKKDPPPPPDDK.........KDDPPPPPDDK.........", ".....KKOOOKDPPPPPDOK.......KDOOPPPPPPDDK........", "....KOOOOOOKDPPPPPDOK.....KDOOPPPPPPPPDDK.......", "...KOOOOOHHHKDPPPPPDOKK.KKDOPPPPPPPPPPDDK.......", "..KOOOOOHHHHHKDOOWWWOOOOOOWWWWWPPPPPPDDK........", ".KOOOOOHHHHHHHHHHDOOWWWWOHYYYYHOWWWOOOK.........", ".KOOOOOHHHHHHHHHHHHOOOOOOHYYYYYYHOOOOOOK........", "KSOOOOOHHHHHHHHHHHHHHHHHHHSSSSSSHOOOOOOK.KKKK...", ".KSOOOOOHHHHHHHSSSSOOOOOHNNNNNNHHOOOOONNKKWWWK..", "..KSOOOOOOHHHSSSSSSOOOWWHHHHHHHHWWWWWWNNKWWWWWK.", "..KSSOOOOOOHSSSSKKKKWWWWWWWRRRWWWWWWWWKKWWWWWWWK", "...KSSOOOOOHSKKOOOOOKKWWWWWWRRRWWWWWWKKWWWWWWWWK", "...KSSSOOOOOHKOOOOOOOOKKKKKCCCCCCKKKKKWWWWWWWWWK", "....KSSSSOOOOKOOOOOHHHHHHHHOOOOOOHHWWWWWWWWWWWWK", ".....KKKSSSSOOOHHHHHHHHHHHHHHHHHHHOWWWWWWWWWWWWK", "........KKKSSSSOOOOOOHHHHHHHHHHHOWWWWWWWWWWWWWK.", "...........KKKSSSSOOOOOOOOOOOOOHWWWWWWWWWWWWWK..", "..............KKKKSSSSOOOOOOOOOWWWWWWWWWWWWWK...", "..................KKKKKKCCCCCCCWWWWWWWWWWWKK....", "........................KKKKKKKKKKKKKKKKKK......", "................................................", "................................................", "................................................"], "sleep2": ["................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "...........KKKKK...............KKKKK............", "..........KDDDDDK.............KDDDDDK...........", ".........KDDPPPDDK...........KDDPPPDDK..........", ".......KKKDPPPPPDDK.........KDDPPPPPDDK.........", ".....KKOOOKDPPPPPDOK.......KDOOPPPPPPDDK........", "....KOOOOOOKDPPPPPDOK.....KDOOPPPPPPPPDDK.......", "...KOOOOOHHHKDPPPPPDOKK.KKDOPPPPPPPPPPDDK.......", "..KOOOOOHHHHHKDOOWWWOOOOOOWWWWWPPPPPPDDK........", "..KOOOOOHHHHHHHOKDOOWWWOOOOOOWWWWODK............", ".KOOOOOHHHHHHHHHHDOOWWWWOHYYYYHOWWWOOOK..KKKK...", "KSOOOOOHHHHHHHHHHHHOOOOOOHYYYYYYHOOOOOOKKWWWWK..", ".KSOOOOOHHHHHHHHHHHHHHHHHHSSSSSSHOOOOOOKWWWWWWK.", "..KSOOOOOHHHHHHSSSSOOOOOHNNNNNNHHOOOOONNKWWWWWWK", "..KSSOOOOOOHHSSSSSSOOOWWHHHHHHHHWWWWWWNNKWWWWWWK", "...KSSOOOOOHSSSSKKKKWWWWWWWRRRWWWWWWWWKKWWWWWWWK", "...KSSSOOOOOHSKKOOOOKKWWWWWWRRRWWWWWWKKWWWWWWWWK", "....KSSSSOOOOHKOOOOOOOKKKKKCCCCCCKKKKKWWWWWWWWWK", ".....KKKSSSSOOOKOOOOHHHHHHHHOOOOOHHWWWWWWWWWWWK.", "........KKKSSSSOOHHHHHHHHHHHHHHHHOWWWWWWWWWWWWK.", "...........KKKSSSSOOOOOHHHHHHHHHOWWWWWWWWWWWWK..", "..............KKKKSSSSOOOOOOOOOOWWWWWWWWWWWWK...", "..................KKKKKKCCCCCCCWWWWWWWWWWWKK....", "........................KKKKKKKKKKKKKKKKKK......", "................................................", "................................................", "................................................"], "jump1": ["...........KKKKK...............KKKKK............", "..........KDDDDDK.............KDDDDDK...........", ".........KDDPPPDDK...........KDDPPPDDK..........", "....KKKKKDDPPPPPDDK.........KDDPPPPPDDK.........", "..KKTTTTTKDPPPPPPDOK.......KDOOPPPPPPDDK........", ".KTTTTTTTKDPPPPPPPDOK.....KDOOPPPPPPPPDDK.......", "KTTTTTTTTOKDPPPPPPPDOKK.KKDOPPPPPPPPPPDDK.......", "KTTTTTTTOOHKDOOWWWOOOOOOWWWWWPPPPPPPPDDK........", "KTTTTTTOOHHSKDOOWWWWOHYYYYHOWWWOOOOODKK.........", ".KTTTTTTWWOHHHSSKDOOOOOOOHYYYYYYHOOOOOOK........", "..KTTTTTTOHHHHSSKOOOOOOOOHHHHHHHHHYYHOOOOK......", "...KWWWWOHHHHHSSKOOOOOOHHHHHHHNNNNNNHOOOK.......", "....KWWOHHHHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK.......", ".....KOOHHHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK.......", "......KOOOHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK.......", ".......KOOOHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK.......", "........KOOOHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK.....", ".........KOOOHSSKKWWWWWWWRRRHEAAAAGWWWWONNK.....", "..........KOOOOHSK.KWWWWWWRRRWWAAAAWWWWWWWKK....", "..........KOOOOOOK..KWWWWWWWWWWWWWWWWWWWWK......", "..........KOOOOOOOK..KKWWWWWWWWWWWWWWWWKK.......", "..........KOOOOOOOOK.KSSSSCCCCWWWWWWWWKK........", "...........KOOOOOOOOKKSOOOOOOOOWWWWWWWWWWK......", "...........KOOOOOOOOOHHHHHHOOOOWWWWWWWWWWWK.....", "............KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWK.....", ".............KSSOOHHHHHHOOOOOOWWWWWWWWWWWK......", "..............KSSOOOOOOOOOOOOOWWWWWWWWWWK.......", ".............KDDKSSOOOOOOWWWWWWWWWWWWWK.........", "............KDDDDK.KKKKKCCCCWWWWCCCKDDK.........", "...........KDDDDDK......KKKKKKKKK..KDDDDK.......", "...........KKKKKK...................KKKKK.......", "................................................", "................................................", "................................................", "................................................", "................................................"], "dance1": ["...........KKKKK...............KKKKK............", "..........KDDDDDK.............KDDDDDK...........", ".........KDDPPPDDK...........KDDPPPDDK..........", "....KKKKKDDPPPPPDDK.........KDDPPPPPDDK.........", "..KKTTTTTKDPPPPPPDOK.......KDOOPPPPPPDDK........", ".KTTTTTTTKDPPPPPPPDOK.....KDOOPPPPPPPPDDK.......", "KTTTTTTTTOKDPPPPPPPDOKK.KKDOPPPPPPPPPPDDK.......", "KTTTTTTTOOHKDOOWWWOOOOOOWWWWWPPPPPPPPDDK........", "KTTTTTTOOHHSKDOOWWWWOHYYYYHOWWWOOOOODKK.........", ".KTTTTTTWWOHHHSSKDOOOOOOHYYYYYYHOOOOOOK.........", "..KTTTTTTOHHHHSSKOOOOOOOOHHHHHHHHHYYHOOOOK......", "...KWWWWOHHHHHSSKOOOOOOHHHHHHHNNNNNNHOOOK.......", "....KWWOHHHHHHSSKOOOOOHHHHHHNNHHHHHHNHOOOK......", ".....KOOHHHHHHSSKOOOOHHHHHHNHHHHHHHHNHHOOOK.....", "......KOOOHHHHSSKOOOHWWHHHHNHHHHHHHHNHOOOK......", ".......KOOOHHHSSKOOWWWWWHHHHHHHHHHHHHWWONNK.....", "........KOOOHHSSKWWWWWWWWHHHRRRHHHHWWWWONNK.....", ".........KOOOHSSKKWWWWWWWRRRRRRWWWWWWWWWWKK.....", "..........KOOOOHSK.KWWWWWWWWWWWWWWWWWWWWK.......", "..........KOOOOOOK..KKWWWWWWWWWWWWWWWWKK........", "..........KOOOOOOOK...KSSSSCCCCWWWWWWKK..KKK....", "...........KOOOOOOOK.KSOOOOOOOOWWWWWWWK.KDDDK...", "...........KOOOOOOOOHHHHHHOOOOOWWWWWWWKKDDDDK...", "............KOOOOOOOOOOOOOOOOOOWWWWWWWWWWDDK....", ".............KSSOOHHHHHHOOOOOOWWWWWWWWWWWKK.....", "..............KSSOOOOOOOOOOOOOWWWWWWWWWWKKK.....", "...............KSSOOOOOOWWWWWWWWWWWWWWKMMK......", "...............KDDK..KKKKCCCCWWWWCCCCKMMMK......", "..............KDDDDK.....KKKKKDDK....KKKK.......", ".............KDDDDDK........KDDDDK..............", ".............KKKKKK.........KKKKK...............", "................................................", "................................................", "................................................", "................................................", "................................................"], "dance2": ["...........KKKKK...............KKKKK............", "..........KDDDDDK.............KDDDDDK...........", ".........KDDPPPDDK...........KDDPPPDDK..........", "....KKKKKDDPPPPPDDK.........KDDPPPPPDDK.........", "..KKTTTTTKDPPPPPPDOK.......KDOOPPPPPPDDK........", ".KTTTTTTTKDPPPPPPPDOK.....KDOOPPPPPPPPDDK.......", "KTTTTTTTTOKDPPPPPPPDOKK.KKDOPPPPPPPPPPDDK.......", "KTTTTTTTOOHKDOOWWWOOOOOOWWWWWPPPPPPPPDDK........", "KTTTTTTOOHHSKDOOWWWWOHYYYYHOWWWOOOOODKK.........", "...KKTTTTTTKK.KDOOWWWWOHYYYYHOWWWOOOK...........", "..KTTTTTTWWWWKKDOOOOOOOHYYYYYYHOOOOOOK..........", ".KTTTTTTTTTTTOHKOOOOOOOOHHHHHHHHHYYHOOOOK.......", ".KTTTTTTWWWWOHHSKOOOOOOHHHHHHHNNNNNNHOOOK.......", "..KWWWWWWWWOHHHSSKOOOOOHHHHHHNNGGGBBNHOOOK......", "...KWWWWWWOHHHHSSKOOOOHHHHHHHNNGGGBBNHOOOK......", "....KWWWWOHHHHHSSKOOOHWWHHHHHHBBBBEEBHOOOK......", ".....KWWOHHHHHHSSKOOWWWWWHHHHHBEEEEAAHOOOK......", "......KOOHHHHHHSSKWWWWWWWWHHHHEEAAAAGHWWONNK....", ".......KOOOHHHHSSKKWWWWWWWRRRHEAAAAGWWWWONNK....", "........KOOOHHHSSK.KWWWWWWRRRWWAAAAWWWWWWWKK....", ".........KOOOHHSSK..KWWWWWWWWWWWWWWWWWWWWK..KKK.", ".........KOOOOHHSK...KKWWWWWWWWWWWWWWWWKK..KDDDK", "..........KOOOOHSSK..KSSSSCCCCWWWWWWWWKK..KDDDDK", "..........KOOOOOHSSKKSOOOOOOOOWWWWWWWWWKKKDDDDK.", "...........KOOOOHHHHHHOOOOOOOOWWWWWWWWWWWWWKK...", "...........KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWKK.....", "............KSSOOHHHHHHOOOOOOWWWWWWWWWWWK.......", ".............KSSOOOOOOOOOOOOOWWWWWWWWWWK........", "..............KSSOOOOOOWWWWWWWWWWWWWWWK.........", ".............KMMK..KKKKCCCCWWWWCCCKDDK..........", "............KMMMK......KKKKKKKKK..KDDDDK........", "............KKKK..................KKKKK.........", "................................................", "................................................", "................................................", "................................................"]}, "cat": {"walk1": ["...KKKKK........................................", "..KOOOOOK........KKK...........KKK..............", ".KOOOOOOOK......KOTOK.........KOTOK.............", ".KOOOKKKOK.....KOOOTOK.......KOTOOOK............", "..KKK..KOOK....KOPPPTOK.....KOTPPPOK............", ".......KTTK...KOPPPPPTOK...KOTPPPPPOK...........", "......KOOOOK..KOPPPPPTOKKKKKOTPPPPPOK...........", "......KOOOOK..KOOOWWWOOOTTTOOOWWWOOOK...........", ".....KTTTTK...KOOOWWWOHYYYYYHOWWWOOOOK..........", ".....KOOOOK..KOOOOOOOHYYYYYYYHOOOOOOOOK.........", ".....KOOOOK..KOOOOOOOOHHHHHHHHHYYHOOOOOK........", ".....KTTTTK.KOOOOOOOOHHHHHHHNNNNNNHOOOOK........", "......KOOOOKKOOOOOOOOHHHHHHNNGGGBBNHOOOK........", "......KOOOOHKOOOOOOOHHHHHHHNNGGGBBNHOOOK........", ".......KTTTTHKOOOOOOHWWHHHHHBBBBEEBHOOOK........", ".......KOOOOHSKOOOOWWWWWHHHHBEEEEAAHOOOK........", "........KOOOHHSKWWWWWWWWWHHHEEAAAAGHWWRRK.......", "........KTTTTHSSKWWWWWWWWRRRHEAAAAGWWWWRRK......", ".........KOOOHHSK.KWWWWWWRRRWWAAAAWWWWWWKK......", ".........KOOOOHHSK.KWWWWWWWWWWWWWWWWWWWWK.......", "..........KOOOOHSSK..KKWWWWWWWWWWWWWWWKK........", "..........KOOOOHHSSK.KSSSSCCCCWWWWWWWKK.........", "..........KOOOOOTTSSKKSOOOOOOOOWWWWWWWWWK.......", "..........KOOOOOTTHHHHHOOOOOTOOWWWWWWWWWWK......", "..........KOOOOOOOOOOOOOOOOTTOOWWWWWWWWWWK......", "...........KOOOOOOOOOOOOOOTTOOOWWWWWWWWWK.......", "...........KSSOOHHHHHHOOOOOOOOOWWWWWWWWK........", "............KSSOOOOOOOOOOOOOOOOWWWWWWWK.........", ".............KSSOOOOOOWWWWWWWWWWWWWWWK..........", ".............KDDK.KMMKKCCCCWWWWCCCCK............", "............KDDDDKKMMK.KKKKDDK.KMMK.............", "............KKKKK.KKKK....KDDDDKKKK.............", "..........................KKKKK.................", "................................................", "................................................", "................................................"], "walk2": ["....KKKKK.......................................", "...KOOOOOK.......KKK...........KKK..............", "..KOOOOOOOK.....KOTOK.........KOTOK.............", "..KOOOKKKOK....KOOOTOK.......KOTOOOK............", "...KKK..KOOK...KOPPPTOK.....KOTPPPOK............", "........KTTK..KOPPPPPTOK...KOTPPPPPOK...........", ".......KOOOOK.KOPPPPPTOKKKKKOTPPPPPOK...........", ".......KOOOOK.KOOOWWWOOOTTTOOOWWWOOOK...........", "......KTTTTK..KOOOWWWOHYYYYYHOWWWOOOOK..........", "......KOOOOK.KOOOOOOOHYYYYYYYHOOOOOOOOK.........", "......KOOOOK.KOOOOOOOOHHHHHHHHHYYHOOOOOK........", "......KTTTTKKOOOOOOOOHHHHHHHNNNNNNHOOOOK........", ".......KOOOOKOOOOOOOOHHHHHHNNGGGBBNHOOOK........", ".......KOOOOHKOOOOOOOHHHHHHHNNGGGBBNHOOOK.......", ".......KTTTTHKOOOOOOHWWHHHHHBBBBEEBHOOOK........", "........KOOOHSKOOOOWWWWWHHHHBEEEEAAHOOOK........", "........KOOOHHSKWWWWWWWWWHHHEEAAAAGHWWRRK.......", ".........KTTTHSSKWWWWWWWWRRRHEAAAAGWWWWRRK......", ".........KOOOHHSK.KWWWWWWRRRWWAAAAWWWWWWKK......", ".........KOOOOHHSK.KWWWWWWWWWWWWWWWWWWWWK.......", "..........KOOOOHSSK..KKWWWWWWWWWWWWWWWKK........", "..........KOOOOHHSSK.KSSSSCCCCWWWWWWWKK.........", "..........KOOOOOTTSSKKSOOOOOOOOWWWWWWWWWK.......", "..........KOOOOOTTHHHHHOOOOOTOOWWWWWWWWWWK......", "..........KOOOOOOOOOOOOOOOOTTOOWWWWWWWWWWK......", "...........KOOOOOOOOOOOOOOTTOOOWWWWWWWWWK.......", "...........KSSOOHHHHHHOOOOOOOOOWWWWWWWWK........", "............KSSOOOOOOOOOOOOOOOOWWWWWWWK.........", ".............KSSOOOOOOWWWWWWWWWWWWWWWK..........", "..............KDDKKMMKKCCCCWWWWCCCCK............", "..............KDDDKMMK.KKKKDDK.KMMK.............", "..............KKKKKKKK....KDDDKKKK..............", "..........................KKKK..................", "................................................", "................................................", "................................................"], "walk3": ["...KKKKK........................................", "..KOOOOOK........KKK...........KKK..............", ".KOOOOOOOK......KOTOK.........KOTOK.............", ".KOOOKKKOK.....KOOOTOK.......KOTOOOK............", "..KKK..KOOK....KOPPPTOK.....KOTPPPOK............", ".......KTTK...KOPPPPPTOK...KOTPPPPPOK...........", "......KOOOOK..KOPPPPPTOKKKKKOTPPPPPOK...........", "......KOOOOK..KOOOWWWOOOTTTOOOWWWOOOK...........", ".....KTTTTK...KOOOWWWOHYYYYYHOWWWOOOOK..........", ".....KOOOOK..KOOOOOOOHYYYYYYYHOOOOOOOOK.........", ".....KOOOOK..KOOOOOOOOHHHHHHHHHYYHOOOOOK........", ".....KTTTTK.KOOOOOOOOHHHHHHHNNNNNNHOOOOK........", "......KOOOOKKOOOOOOOOHHHHHHNNGGGBBNHOOOK........", "......KOOOOHKOOOOOOOHHHHHHHNNGGGBBNHOOOK........", ".......KTTTTHKOOOOOOHWWHHHHHBBBBEEBHOOOK........", ".......KOOOOHSKOOOOWWWWWHHHHBEEEEAAHOOOK........", "........KOOOHHSKWWWWWWWWWHHHEEAAAAGHWWRRK.......", "........KTTTTHSSKWWWWWWWWRRRHEAAAAGWWWWRRK......", ".........KOOOHHSK.KWWWWWWRRRWWAAAAWWWWWWKK......", ".........KOOOOHHSK.KWWWWWWWWWWWWWWWWWWWWK.......", "..........KOOOOHSSK..KKWWWWWWWWWWWWWWWKK........", "..........KOOOOHHSSK.KSSSSCCCCWWWWWWWKK.........", "..........KOOOOOTTSSKKSOOOOOOOOWWWWWWWWWK.......", "..........KOOOOOTTHHHHHOOOOOTOOWWWWWWWWWWK......", "..........KOOOOOOOOOOOOOOOOTTOOWWWWWWWWWWK......", "...........KOOOOOOOOOOOOOOTTOOOWWWWWWWWWK.......", "...........KSSOOHHHHHHOOOOOOOOOWWWWWWWWK........", "............KSSOOOOOOOOOOOOOOOOWWWWWWWK.........", ".............KSSOOOOOOWWWWWWWWWWWWWWWK..........", ".............KMMK.KDDKKCCCCWWWWCCCCK............", "............KMMMK.KDDDKKKKKMMK.KDDK.............", "............KKKK..KKKKK...KMMMKKKKDK............", "..........................KKKK.KKKK.............", "................................................", "................................................", "................................................"], "sit1": [".....KKKKK......................................", "....KOOOOOK......KKK...........KKK..............", "...KOOOOOOOK....KOTOK.........KOTOK.............", "...KOOOKKKOK...KOOOTOK.......KOTOOOK............", "....KKK..KOOK..KOPPPTOK.....KOTPPPOK............", ".........KTTK.KOPPPPPTOK...KOTPPPPPOK...........", "........KOOOOKKOPPPPPTOKKKKKOTPPPPPOK...........", "........KOOOOKKOOOWWWOOOTTTOOOWWWOOOK...........", ".......KTTTTK.KOOOWWWOHYYYYYHOWWWOOOOK..........", ".......KOOOOKKOOOOOOOHYYYYYYYHOOOOOOOOK.........", ".......KOOOOKOOOOOOOOHHHHHHHHHYYHOOOOOK.........", ".......KTTTTKOOOOOOOOHHHHHHHNNNNNNHOOOOK........", "........KOOOOKOOOOOOOHHHHHHNNGGGBBNHOOOK........", "........KOOOOHKOOOOOOHHHHHHNNGGGBBNHOOOK........", "........KTTTTHSKOOOOHWWHHHHHBBBBEEBHOOOK........", ".........KOOOHHSKOOWWWWWHHHHBEEEEAAHOOOK........", ".........KOOOOHSKWWWWWWWWHHHEEAAAAGHWWRRK.......", "..........KTTTTSKKWWWWWWWRRRHEAAAAGWWWWRRK......", "..........KOOOOHSK.KWWWWWRRRWWAAAAWWWWWWKK......", "...........KOOOOHSK.KWWWWWWWWWWWWWWWWWWWK.......", "...........KOOOOHSSK..KKWWWWWWWWWWWWWWKK........", "...........KOOOOOHSSK.KSSSSCCCCWWWWWWKK.........", "............KOOOOTTSSKKSOOOOOOOOWWWWWWWWK.......", "............KOOOOTTHSSKSOOOOOHHOWWWWWWWWWK......", ".............KOOOTTHSSSOOOOOHHOWWWWWWWWWK.......", ".............KSSSOOOOOOOOOOOOOWWWWWWWWWK........", "..............KKKKSSOOOOOOOOOOWWWWWWWWK.........", "..................KKDDDDKKKKKDDDDDDKK...........", "...................KDDDDDK..KDDDDDDK............", "...................KKKKKK...KKKKKKKK............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sit2": ["....KKKKK.......................................", "...KOOOOOK.......KKK...........KKK..............", "..KOOOOOOOK.....KOTOK.........KOTOK.............", "..KOOOKKKOK....KOOOTOK.......KOTOOOK............", "...KKK..KOOK...KOPPPTOK.....KOTPPPOK............", "........KTTK..KOPPPPPTOK...KOTPPPPPOK...........", ".......KOOOOK.KOPPPPPTOKKKKKOTPPPPPOK...........", ".......KOOOOK.KOOOWWWOOOTTTOOOWWWOOOK...........", "......KTTTTK..KOOOWWWOHYYYYYHOWWWOOOOK..........", "......KOOOOK.KOOOOOOOHYYYYYYYHOOOOOOOOK.........", ".......KOOOOKOOOOOOOOHHHHHHHHHYYHOOOOOK.........", ".......KTTTTKOOOOOOOOHHHHHHHSSSSSSHOOOOK........", "........KOOOOKOOOOOOOHHHHHHOOOOOOOHOOOK.........", "........KOOOOHKOOOOOOHHHHHHNNNNNNNHOOOK.........", "........KTTTTHSKOOOOHWWHHHHHBBBBEEBHOOOK........", ".........KOOOHHSKOOWWWWWHHHHBEEEEAAHOOOK........", ".........KOOOOHSKWWWWWWWWHHHEEAAAAGHWWRRK.......", "..........KTTTTSKKWWWWWWWRRRHEAAAAGWWWWRRK......", "..........KOOOOHSK.KWWWWWRRRWWAAAAWWWWWWKK......", "...........KOOOOHSK.KWWWWWWWWWWWWWWWWWWWK.......", "...........KOOOOHSSK..KKWWWWWWWWWWWWWWKK........", "...........KOOOOOHSSK.KSSSSCCCCWWWWWWKK.........", "............KOOOOTTSSKKSOOOOOOOOWWWWWWWWK.......", "............KOOOOTTHSSKSOOOOOHHOWWWWWWWWWK......", ".............KOOOTTHSSSOOOOOHHOWWWWWWWWWK.......", ".............KSSSOOOOOOOOOOOOOWWWWWWWWWK........", "..............KKKKSSOOOOOOOOOOWWWWWWWWK.........", "..................KKDDDDKKKKKDDDDDDKK...........", "...................KDDDDDK..KDDDDDDK............", "...................KKKKKK...KKKKKKKK............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sleep1": ["................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", ".................KKK...........KKK..............", "................KOTOK.........KOTOK.............", ".......KKKKKK..KOOOTOK.......KOTOOOK............", ".....KKOOOOOOKKOPPPTOK.....KOTPPPOK.............", "....KOOOOOOOOOKOPPPPPTOK...KOTPPPPPOK...........", "...KOOOOOHHHHHOKOPPPPPTOKKKKKOTPPPPPOK..........", "..KOOOOOHHHHHHHOKOOOWWWOOOTTTOOOWWWOOOK.........", ".KOOOOOHHHHHHHHHHOOOWWWOHYYYYYHOWWWOOOOK........", ".KOOOOHHHHHHTTTHHHHOOOOOHYYYYYYYHOOOOOOOK.......", "KSOOOOHHHHHHTTTTHHHHHHHHHHHSSSSSSHOOOOOOKKKKK...", ".KSOOOOOHHHHHHHSSSSOOOOOHNNNNNNHHOOOOORRKKOOOK..", "..KSOOOOOOHHHSSSSSSOOOWWHHHHHHHHWWWWWWRRKOOOOOK.", "..KSSOOOOOOHSSSSKKKKWWWWWWWRRRWWWWWWWWKKOTTTTTOK", "...KSSOOOOOHSKKOOOOOKKWWWWWWRRRWWWWWWKKOOOOOOOOK", "...KSSSOOOOOHKOOOOOOOOKKKKKCCCCCCKKKKKOOOOOOOOOK", "....KSSSSOOOOKOOOOOHHHHHHHHOOOOOOHHWWWWOOOOOOOK.", ".....KKKSSSSOOOHHHHHHHHHHHHHHHHHHHOWWWWWOOOOOK..", "........KKKSSSSOOOOOOTTHHHHHHHHHOWWWWWWWWWWWK...", "...........KKKSSSSOOOTTOOOOOOOOHWWWWWWWWWWWK....", "..............KKKKSSSSOOOOOOOOOWWWWWWWWWWWK.....", "..................KKKKKKCCCCCCCWWWWWWWWWKK......", "........................KKKKKKKKKKKKKKKK........", "................................................", "................................................", "................................................"], "sleep2": ["................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", ".................KKK...........KKK..............", "................KOTOK.........KOTOK.............", ".......KKKKKK..KOOOTOK.......KOTOOOK............", ".....KKOOOOOOKKOPPPTOK.....KOTPPPOK.............", "....KOOOOOOOOOKOPPPPPTOK...KOTPPPPPOK...........", "...KOOOOOHHHHHOKOPPPPPTOKKKKKOTPPPPPOK..........", "..KOOOOOHHHHHHHOKOOOWWWOOOTTTOOOWWWOOOK.........", ".KOOOOOHHHHHHHHHHOOOWWWOHYYYYYHOWWWOOOOK.KKKK...", "KSOOOOHHHHHHTTTHHHHOOOOOHYYYYYYYHOOOOOOOKKOOOK..", ".KSOOOOHHHHHHTTTTHHHHHHHHHHSSSSSSHOOOOOOKOOOOOK.", "..KSOOOOOHHHHHHSSSSOOOOOHNNNNNNHHOOOOORRKOTTTTTO", "..KSSOOOOOOHHSSSSSSOOOWWHHHHHHHHWWWWWWRRKOOOOOOO", "...KSSOOOOOHSSSSKKKKWWWWWWWRRRWWWWWWWWKKOOOOOOOO", "...KSSSOOOOOHSKKOOOOKKWWWWWWRRRWWWWWWKKOOOOOOOOO", "....KSSSSOOOOHKOOOOOOOKKKKKCCCCCCKKKKKOOOOOOOOOK", ".....KKKSSSSOOOKOOOOHHHHHHHHOOOOOHHWWWWOOOOOOOK.", "........KKKSSSSOOHHHHHHHHHHHHHHHHOWWWWWOOOOOOK..", "...........KKKSSSSOOOOOTTHHHHHHHOWWWWWWWWWWWK...", "..............KKKKSSSSOTTOOOOOOOOWWWWWWWWWWK....", "..................KKKKKKCCCCCCCWWWWWWWWWKK......", "........................KKKKKKKKKKKKKKKK........", "................................................", "................................................", "................................................"], "jump1": ["...KKKKK........................................", "..KOOOOOK..........KKK...........KKK............", ".KOOOOOOOK........KOTOK.........KOTOK...........", ".KOOOKKKOK.......KOOOTOK.......KOTOOOK..........", "..KKK..KOOK.....KOPPPTOK.....KOTPPPOK...........", ".......KTTK....KOPPPPPTOK...KOTPPPPPOK..........", "......KOOOOK...KOPPPPPTOKKKKKOTPPPPPOK..........", "......KOOOOK...KOOOWWWOOOTTTOOOWWWOOOK..........", ".....KTTTTK....KOOOWWWOHYYYYYHOWWWOOOOK.........", ".....KOOOOK...KOOOOOOOHYYYYYYYHOOOOOOOOK........", ".....KOOOOK..KOOOOOOOOHHHHHHHHHYYHOOOOOK........", "......KTTTTK.KOOOOOOOHHHHHHHNNNNNNHOOOOK........", "......KOOOOK.KOOOOOOOHHHHHHNNGGGBBNHOOOK........", ".......KOOOOHKOOOOOOHHHHHHHNNGGGBBNHOOOK........", ".......KTTTTHSKOOOOOHWWHHHHHBBBBEEBHOOOK........", "........KOOOHHSKOOOWWWWWHHHHBEEEEAAHOOOK........", "........KOOOOHSKWWWWWWWWHHHHEEAAAAGHWWRRK.......", ".........KTTTTSKKWWWWWWWRRRHEAAAAGWWWWRRK.......", "..........KOOOOHSK.KWWWWWRRRWWAAAAWWWWWWKK......", "..........KOOOOOOK..KWWWWWWWWWWWWWWWWWWWWK......", "..........KOOOOOOOK..KKWWWWWWWWWWWWWWWWKK.......", "..........KOOOOOOOOK.KSSSSCCCCWWWWWWWWKK........", "...........KOOOOOTTSSKSOOOOOOOOWWWWWWWWWWK......", "...........KOOOOOTTHHHHHHOOOOTOOWWWWWWWWWWK.....", "............KOOOOOOOOOOOOOOOOTTOOWWWWWWWWWWK....", ".............KSSOOHHHHHHOOOOOOOOOWWWWWWWWWK.....", "..............KSSOOOOOOOOOOOOOOOOWWWWWWWWK......", ".............KDDKSSOOOOOOWWWWWWWWWWWWWK.........", "............KDDDDK.KKKKKCCCCWWWWCCCKDDK.........", "...........KDDDDDK......KKKKKKKKK..KDDDDK.......", "...........KKKKKK...................KKKKK.......", "................................................", "................................................", "................................................", "................................................", "................................................"], "dance1": ["...KKKKK........................................", "..KOOOOOK........KKK...........KKK..............", ".KOOOOOOOK......KOTOK.........KOTOK.............", ".KOOOKKKOK.....KOOOTOK.......KOTOOOK............", "..KKK..KOOK....KOPPPTOK.....KOTPPPOK............", ".......KTTK...KOPPPPPTOK...KOTPPPPPOK...........", "......KOOOOK..KOPPPPPTOKKKKKOTPPPPPOK...........", "......KOOOOK..KOOOWWWOOOTTTOOOWWWOOOK...........", ".....KTTTTK...KOOOWWWOHYYYYYHOWWWOOOOK..........", ".....KOOOOK..KOOOOOOOHYYYYYYYHOOOOOOOOK.........", ".....KOOOOK..KOOOOOOOOHHHHHHHHHYYHOOOOOK........", "......KTTTTK.KOOOOOOOHHHHHHHNNNNNNHOOOOK........", "......KOOOOK.KOOOOOOOHHHHHHNNHHHHHHNHOOOK.......", ".......KOOOOHKOOOOOOHHHHHHNHHHHHHHHNHHOOOK......", ".......KTTTTHSKOOOOOHWWHHHHNHHHHHHHHNHOOOK......", "........KOOOHHSKOOOWWWWWHHHHHHHHHHHHHWWRRK......", "........KOOOOHSKWWWWWWWWHHHRRRHHHHWWWWRRK.......", ".........KTTTTSKKWWWWWWWRRRRRRWWWWWWWWWWKK......", "..........KOOOOHSK.KWWWWWWWWWWWWWWWWWWWWK.......", "..........KOOOOOOK..KKWWWWWWWWWWWWWWWWKK........", "..........KOOOOOOOK...KSSSSCCCCWWWWWWKK..KKK....", "...........KOOOOOTTK.KSOOOOOOOOWWWWWWWK.KDDDK...", "...........KOOOOOTTHHHHHHOOOOOWWWWWWWKKDDDDK....", "............KOOOOOOOOOOOOOOOOOOWWWWWWWWWWDDK....", ".............KSSOOHHHHHHOOOOOOWWWWWWWWWWWKK.....", "..............KSSOOOOOOOOOOOOOWWWWWWWWWWKKK.....", "...............KSSOOOOOOWWWWWWWWWWWWWWKMMK......", "...............KDDK..KKKKCCCCWWWWCCCCKMMMK......", "..............KDDDDK.....KKKKKDDK....KKKK.......", ".............KDDDDDK........KDDDDK..............", ".............KKKKKK.........KKKKK...............", "................................................", "................................................", "................................................", "................................................", "................................................"], "dance2": ["....KKKKK.......................................", "...KOOOOOK........KKK...........KKK.............", "..KOOOOOOOK......KOTOK.........KOTOK............", "..KOOOKKKOK.....KOOOTOK.......KOTOOOK...........", "...KKK..KOOK....KOPPPTOK.....KOTPPPOK...........", "........KTTK...KOPPPPPTOK...KOTPPPPPOK..........", ".......KOOOOK..KOPPPPPTOKKKKKOTPPPPPOK..........", ".......KOOOOK..KOOOWWWOOOTTTOOOWWWOOOK..........", "......KTTTTK...KOOOWWWOHYYYYYHOWWWOOOOK.........", "......KOOOOK..KOOOOOOOHYYYYYYYHOOOOOOOOK........", "......KOOOOK..KOOOOOOOOHHHHHHHHHYYHOOOOOK.......", ".......KTTTTK.KOOOOOOOHHHHHHHNNNNNNHOOOOK.......", ".......KOOOOK.KOOOOOOOHHHHHHNNGGGBBNHOOOK.......", "........KOOOOHKOOOOOOHHHHHHHNNGGGBBNHOOOK.......", "........KTTTTHSKOOOOOHWWHHHHHBBBBEEBHOOOK.......", ".........KOOOHHSKOOOWWWWWHHHHBEEEEAAHOOOK.......", ".........KOOOOHSKWWWWWWWWHHHHEEAAAAGHWWRRK......", "..........KTTTTSKKWWWWWWWRRRHEAAAAGWWWWRRK......", "..........KOOOOHHSK.KWWWWWRRRWWAAAAWWWWWWKK.....", "..........KOOOOOHHSK..KWWWWWWWWWWWWWWWWWWWWK.KKK", "...........KOOOOHHSK...KKWWWWWWWWWWWWWWWWKKKDDDK", "...........KOOOOOHSSK..KSSSSCCCCWWWWWWWWKKKDDDDK", "...........KOOOOOTTSSKKSOOOOOOOOWWWWWWWWWKKDDDDK", "............KOOOOTTHHHHHOOOOOOOOWWWWWWWWWWWWWKK.", "............KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWKK....", ".............KSSOOHHHHHHOOOOOOWWWWWWWWWWWK......", "..............KSSOOOOOOOOOOOOOWWWWWWWWWWK.......", "...............KSSOOOOOOWWWWWWWWWWWWWWWK........", "..............KMMK..KKKKCCCCWWWWCCCKDDK.........", ".............KMMMK......KKKKKKKKK..KDDDDK.......", ".............KKKK..................KKKKK........", "................................................", "................................................", "................................................", "................................................", "................................................"]}, "chillet": {"walk1": [".........KKKKKK.........KKKKKK..................", ".......KKDDDDDDK......KKDDDDDDK.................", "......KDDDDGDDDDK....KDDDDGDDDDK................", ".....KDDDDGGGDDDDK..KDDDDGGGDDDDK...............", ".....KDDDDGDDDDDOOK.KDDDDGDDDDDOOK..............", "......KKDDDDDOOOOOOKKKDDDDDOOOOOOK..............", "........KKKKKOOOOOOOHYYYYHOOOOOOOK..............", "............KOOOOOOOHYYYYYYHOOOOOOK.............", "...........KOOOOOOOOHHHHHHHHHYYHOOOOK...........", "..........KOOOOOOOOOHHHHHHHNNNNNNHOOOK..........", ".KKKKKK...KOOOOOOOOOHHHHHHNNGGGBBNHOOOK.........", "KDDDDDDK..KOOOOOOOOOHHHHHHNNGGGBBNHOOOK.........", "KDDDGDDDK.KOOOOOOOOOHHHHHHHBBBBEEBHOOOK.........", "KDDGGGDDDK.KOOOOOOOOOHHHHHHBEEEEAAHOOOK.........", "KDDDGDDDDK..KOOOOOOOOHHHHHHEEAAAAGHWWONK........", ".KDDDDDDDK...KOOOOOOOOHHRRRHEAAAAGWWWWONK.......", "..KKDDDDDOK..KDDDDDDDDDDRRRWWWWWWWWWWWWKK.......", "....KKDDDOOKKDDDDDDDDDDDDDDDWWWWWWWWWK..........", ".....KOOOOOOOKPPPPPPPPPPPPPWWWWWWWWK............", "......KOOOOOOOHHHHHHHHHHHHWWWWWWWWK.............", ".......KOOOOOOHHHHHHHHHHHWWWWWWWWK..............", ".......KOOOOOOTTOOOOOOOOTTOWWWWWWWK.............", "........KOOOOOTTOOOOOOOOTTOWWWWWWWK.............", "........KOOOOOOOOOOOOOOOOOOWWWWWWWK.............", ".........KSSOOHHHHHHHHHHOOOWWWWWWWK.............", "..........KSSWWWWWWWWWWWWWWWWWWWWK..............", "...........KKCCCCCCCCCCCCCCCCCCCK...............", "............KWWK.KCCK.....KWWK.KCCK.............", "...........KWWWWKKCCK....KWWWWKKCCK.............", "...........KKKKK.KKKK....KKKKK.KKKK.............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "walk2": [".........KKKKKK.........KKKKKK..................", ".......KKDDDDDDK......KKDDDDDDK.................", "......KDDDDGDDDDK....KDDDDGDDDDK................", ".....KDDDDGGGDDDDK..KDDDDGGGDDDDK...............", ".....KDDDDGDDDDDOOK.KDDDDGDDDDDOOK..............", "......KKDDDDDOOOOOOKKKDDDDDOOOOOOK..............", "........KKKKKOOOOOOOHYYYYHOOOOOOOK..............", "............KOOOOOOOHYYYYYYHOOOOOOK.............", "...........KOOOOOOOOHHHHHHHHHYYHOOOOK...........", ".KKKKKK...KOOOOOOOOOHHHHHHHNNNNNNHOOOK..........", "KDDDDDDK..KOOOOOOOOOHHHHHHNNGGGBBNHOOOK.........", "KDDDGDDDK.KOOOOOOOOOHHHHHHNNGGGBBNHOOOK.........", "KDDGGGDDDK.KOOOOOOOOOHHHHHHHBBBBEEBHOOOK........", "KDDDGDDDDK..KOOOOOOOOHHHHHHBEEEEAAHOOOK.........", ".KDDDDDDDK..KOOOOOOOOHHHHHHEEAAAAGHWWONK........", "..KKDDDDDOK..KOOOOOOOOHHRRRHEAAAAGWWWWONK.......", "....KKDDDOOK.KDDDDDDDDDDRRRWWWWWWWWWWWWKK.......", ".....KOOOOOOKKDDDDDDDDDDDDDDDWWWWWWWWWK.........", "......KOOOOOOOKPPPPPPPPPPPPPWWWWWWWWK...........", ".......KOOOOOOOHHHHHHHHHHHHWWWWWWWWK............", ".......KOOOOOOHHHHHHHHHHHWWWWWWWWK..............", "........KOOOOOTTOOOOOOOOTTOWWWWWWWK.............", "........KOOOOOTTOOOOOOOOTTOWWWWWWWK.............", ".........KOOOOOOOOOOOOOOOOOWWWWWWWK.............", ".........KSSOOHHHHHHHHHHOOOWWWWWWWK.............", "..........KSSWWWWWWWWWWWWWWWWWWWWK..............", "...........KKCCCCCCCCCCCCCCCCCCCK...............", ".............KWWKKCCK......KWWKKCCK.............", ".............KWWWKCCK......KWWWKCCK.............", ".............KKKKKKKK......KKKKKKKK.............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "walk3": [".........KKKKKK.........KKKKKK..................", ".......KKDDDDDDK......KKDDDDDDK.................", "......KDDDDGDDDDK....KDDDDGDDDDK................", ".....KDDDDGGGDDDDK..KDDDDGGGDDDDK...............", ".....KDDDDGDDDDDOOK.KDDDDGDDDDDOOK..............", "......KKDDDDDOOOOOOKKKDDDDDOOOOOOK..............", "........KKKKKOOOOOOOHYYYYHOOOOOOOK..............", "............KOOOOOOOHYYYYYYHOOOOOOK.............", "...........KOOOOOOOOHHHHHHHHHYYHOOOOK...........", "..........KOOOOOOOOOHHHHHHHNNNNNNHOOOK..........", ".KKKKKK...KOOOOOOOOOHHHHHHNNGGGBBNHOOOK.........", "KDDDDDDK..KOOOOOOOOOHHHHHHNNGGGBBNHOOOK.........", "KDDDGDDDK.KOOOOOOOOOHHHHHHHBBBBEEBHOOOK.........", "KDDGGGDDDK.KOOOOOOOOOHHHHHHBEEEEAAHOOOK.........", "KDDDGDDDDK..KOOOOOOOOHHHHHHEEAAAAGHWWONK........", ".KDDDDDDDK...KOOOOOOOOHHRRRHEAAAAGWWWWONK.......", "..KKDDDDDOK..KDDDDDDDDDDRRRWWWWWWWWWWWWKK.......", "....KKDDDOOKKDDDDDDDDDDDDDDDWWWWWWWWWK..........", ".....KOOOOOOOKPPPPPPPPPPPPPWWWWWWWWK............", "......KOOOOOOOHHHHHHHHHHHHWWWWWWWWK.............", ".......KOOOOOOHHHHHHHHHHHWWWWWWWWK..............", ".......KOOOOOOTTOOOOOOOOTTOWWWWWWWK.............", "........KOOOOOTTOOOOOOOOTTOWWWWWWWK.............", "........KOOOOOOOOOOOOOOOOOOWWWWWWWK.............", ".........KSSOOHHHHHHHHHHOOOWWWWWWWK.............", "..........KSSWWWWWWWWWWWWWWWWWWWWK..............", "...........KKCCCCCCCCCCCCCCCCCCCK...............", "............KCCK.KWWK.....KCCK.KWWK.............", "...........KCCCKKWWWWK...KCCCKKWWWWK............", "...........KKKK..KKKKK...KKKK..KKKKK............", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sit1": ["............KKKKKK.......KKKKKK.................", "..........KKDDDDDDK....KKDDDDDDK................", ".........KDDDDGDDDDK..KDDDDGDDDDK...............", "........KDDDDGGGDDDDKKDDDDGGGDDDDK..............", "........KDDDDDDDDDOOKKDDDDDDDDDOOK..............", ".........KKDDDDDOOOOOKKDDDDDOOOOOK..............", "...........KKKKKOOOOOOHYYYYHOOOOOOK.............", "...............KOOOOOOHYYYYYYHOOOOOOK...........", "..............KOOOOOOOOHHHHHHHHYYHOOOOK.........", ".............KOOOOOOOOOHHHHHHNNNNNNHOOOK........", ".............KOOOOOOOOOHHHHHNNGGGBBNHOOOK.......", ".............KOOOOOOOOOHHHHHNNGGGBBNHOOOK.......", ".............KOOOOOOOOOHHHHHHBBBBEEBHOOOK.......", "..............KOOOOOOOOOHHHHHBEEEEAAHOOOK.......", "...............KOOOOOOOOHHHHHEEAAAAGHWWONK......", "....KKKKKK......KOOOOOOOOHRRRHEAAAAGWWWWONK.....", "..KKDDDDDDK.....KDDDDDDDDDRRRWWWWWWWWWWWWKK.....", ".KDDDDGDDDDK...KDDDDDDDDDDDDDDWWWWWWWWWK........", ".KDDDGGGDDDK...KPPPPPPPPPPPPPWWWWWWWWK..........", ".KDDDDGDDDDK...KOOOOOOHHHHHHWWWWWWWWWWK.........", "..KDDDDDDDOK..KOOOOOOTTOOOOOOWWWWWWWWWK.........", "...KKDDDDOOOK.KOOOOOOTTOOOOOOWWWWWWWWWK.........", ".....KKOOOOOOKKOOOOOOOOOOOOOOWWWWWWWWWK.........", ".......KOOOOOOHHHHHHHHHHHHHHOWWWWWWWWK..........", "........KSSOOOOOOOOOOOOOOOOOOWWWWWWWK...........", ".........KSSWWWWWWWWWWWWWWWWWWWWWWWK............", "..........KKKWWWWKKKKCCCCCCCWWWWKKK.............", "............KWWWWK........KWWWWK................", "............KKKKKK........KKKKKK................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sit2": ["............KKKKKK.......KKKKKK.................", "..........KKDDDDDDK....KKDDDDDDK................", ".........KDDDDGDDDDK..KDDDDGDDDDK...............", "........KDDDDGGGDDDDKKDDDDGGGDDDDK..............", "........KDDDDDDDDDOOKKDDDDDDDDDOOK..............", ".........KKDDDDDOOOOOKKDDDDDOOOOOK..............", "...........KKKKKOOOOOOHYYYYHOOOOOOK.............", "...............KOOOOOOHYYYYYYHOOOOOOK...........", "..............KOOOOOOOOHHHHHHHHYYHOOOOK.........", ".............KOOOOOOOOOHHHHHHSSSSSSHOOOK........", ".............KOOOOOOOOOHHHHHHOOOOOOOHOOOK.......", ".............KOOOOOOOOOHHHHHHNNNNNNNHOOOK.......", ".............KOOOOOOOOOHHHHHHBBBBEEBHOOOK.......", "..............KOOOOOOOOOHHHHHBEEEEAAHOOOK.......", "...KKKKKK......KOOOOOOOOHHHHHEEAAAAGHWWONK......", ".KKDDDDDDK......KOOOOOOOOHRRRHEAAAAGWWWWONK.....", "KDDDDGDDDDK.....KDDDDDDDDDRRRWWWWWWWWWWWWKK.....", "KDDDGGGDDDK....KDDDDDDDDDDDDDDWWWWWWWWWK........", "KDDDDGDDDDK....KPPPPPPPPPPPPPWWWWWWWWK..........", ".KDDDDDDDOK....KOOOOOOHHHHHHWWWWWWWWWWK.........", "..KKDDDDOOOK..KOOOOOOTTOOOOOOWWWWWWWWWK.........", "....KKOOOOOOK.KOOOOOOTTOOOOOOWWWWWWWWWK.........", "......KOOOOOOKKOOOOOOOOOOOOOOWWWWWWWWWK.........", ".......KOOOOOOHHHHHHHHHHHHHHOWWWWWWWWK..........", "........KSSOOOOOOOOOOOOOOOOOOWWWWWWWK...........", ".........KSSWWWWWWWWWWWWWWWWWWWWWWWK............", "..........KKKWWWWKKKKCCCCCCCWWWWKKK.............", "............KWWWWK........KWWWWK................", "............KKKKKK........KKKKKK................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "sleep1": ["................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", ".............KKKKKK.......KKKKKK................", "...........KKDDDDDDK....KKDDDDDDK...............", "..........KDDDDGDDDDK..KDDDDGDDDDK..............", ".........KDDDDGGGDDDDKKDDDDGGGDDDDK.............", "......KKKKDDDDDDDDDOOKKDDDDDDDDDOOK.............", "....KKOOOOOKKDDDDDOOOOOKKDDDDDOOOOOK............", "...KOOOOOOOOKKKKKOOOOOOHYYYYHOOOOOOK............", "..KOOOOOHHHHHHHHHOOOOOOHYYYYYYHOOOOOOK..........", ".KOOOOOHHHHHHHHHHHHHHHHSSSSSSHOOOOOOK..KKKKK....", ".KOOOOHHHHHHTTTOOOOOOOHNNNNNNHHOOOOONKKDDDDDK...", "KSOOOOHHHHHHTTTTOOOOOHHHHHHHHHWWWWWWNNKDDGDDDK..", ".KSOOOOOHHHHHHHDDDDDDDDRRRWWWWWWWWWKKDDDGGGDDK..", "..KSOOOOOOHHHDDDDDDDDDDDRRRWWWWWWWKKKDDDDGDDDDK.", "..KSSOOOOOOHKPPPPPPPPPPPWWWWWWWWKKWWWWDDDDDDDK..", "...KSSOOOOOHKOOOOOOOOOOOOHHHHHHHWWWWWWWWDDDDK...", "...KSSSOOOOOKOOOOOOTTOOOOOOOOOOOWWWWWWWWWKKK....", "....KSSSSOOOOHHHHHHTTOOOOOOOOOOWWWWWWWWWWK......", ".....KKKSSSSOOOOOOOOOOOOOOOOOOOWWWWWWWWWK.......", "........KKKSSSSWWWWWWWWWWWWWWWWWWWWWWWWK........", "...........KKKKCCCCCCCCCCCCCCCCCCCCCCKK.........", "...............KKKKKKKKKKKKKKKKKKKKKK...........", "................................................", "................................................", "................................................", "................................................", "................................................"], "sleep2": ["................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", ".............KKKKKK.......KKKKKK................", "...........KKDDDDDDK....KKDDDDDDK...............", "..........KDDDDGDDDDK..KDDDDGDDDDK..............", "......KKKKDDDDGGGDDDDKKDDDDGGGDDDDK.............", "....KKOOOOKDDDDDDDDDOOKKDDDDDDDDDOOK............", "...KOOOOOOOOKKDDDDDOOOOOKKDDDDDOOOOOK...........", "..KOOOOOHHHHHHKKKKKOOOOOOHYYYYHOOOOOOK..........", ".KOOOOOHHHHHHHHHHHHOOOOOOHYYYYYYHOOOOOOK.KKKKK..", "KSOOOOHHHHHHTTTOOOOOOOOOHSSSSSSHOOOOOOKKKDDDDDK.", ".KSOOOOHHHHHHTTTTOOOOOOHNNNNNNHHOOOOONNKDDGDDDK.", "..KSOOOOOHHHHHHHDDDDDDDDRRRWWWWWWWWWKKDDDGGGDDK.", "..KSSOOOOOOHHHDDDDDDDDDDRRRWWWWWWWKKKDDDDGDDDDK.", "...KSSOOOOOHKPPPPPPPPPPPWWWWWWWWKKWWWWDDDDDDDK..", "...KSSSOOOOOHKOOOOOOOOOOHHHHHHHWWWWWWWWDDDDK....", "....KSSSSOOOOKOOOOOTTOOOOOOOOOOWWWWWWWWWKKK.....", ".....KKKSSSSOOHHHHHTTOOOOOOOOOWWWWWWWWWWK.......", "........KKKSSSSOOOOOOOOOOOOOOOWWWWWWWWWK........", "...........KKKSSSSWWWWWWWWWWWWWWWWWWWWK.........", "..............KKKKCCCCCCCCCCCCCCCCCCCKK.........", "..................KKKKKKKKKKKKKKKKKKKK..........", "................................................", "................................................", "................................................", "................................................", "................................................"], "jump1": ["...........KKKKKK.........KKKKKK................", ".........KKDDDDDDK......KKDDDDDDK...............", "........KDDDDGDDDDK....KDDDDGDDDDK..............", ".......KDDDDGGGDDDDK..KDDDDGGGDDDDK.............", ".......KDDDDGDDDDDOOK.KDDDDGDDDDDOOK............", "........KKDDDDDOOOOOOKKKDDDDDOOOOOOK............", ".KKKKKK...KKKKKOOOOOOOHYYYYHOOOOOOOK............", "KDDDDDDK......KOOOOOOOHYYYYYYHOOOOOOK...........", "KDDDGDDDK....KOOOOOOOOHHHHHHHHHYYHOOOOK.........", "KDDGGGDDDK..KOOOOOOOOOHHHHHHHNNNNNNHOOOK........", "KDDDGDDDDK..KOOOOOOOOOHHHHHHNNGGGBBNHOOOK.......", ".KDDDDDDDK..KOOOOOOOOOHHHHHHNNGGGBBNHOOOK.......", "..KKDDDDDOK.KOOOOOOOOOHHHHHHHBBBBEEBHOOOK.......", "....KKDDDOOK.KOOOOOOOOOHHHHHHBEEEEAAHOOOK.......", ".....KOOOOOOK.KOOOOOOOOHHHHHHEEAAAAGHWWONK......", "......KOOOOOOK.KOOOOOOOOHHRRRHEAAAAGWWWWONK.....", ".......KOOOOOOKKDDDDDDDDDDRRRWWWWWWWWWWWWKK.....", "........KOOOOOOKDDDDDDDDDDDDDDDWWWWWWWWWK.......", ".........KOOOOOOKPPPPPPPPPPPPPWWWWWWWWK.........", ".........KOOOOOOOHHHHHHHHHHHHWWWWWWWWK..........", "..........KOOOOOOTTOOOOOOOOTTOWWWWWWWK..........", "..........KOOOOOOTTOOOOOOOOTTOWWWWWWWK..........", "...........KOOOOOOOOOOOOOOOOOOWWWWWWWK..........", "............KSSOOHHHHHHHHHHOOOWWWWWWWK..........", ".............KSSWWWWWWWWWWWWWWWWWWWWK...........", "............KWWKCCCCCCCCCCCCCCCCCKWWK...........", "...........KWWWWK.KKKKKKKKKKKKK..KWWWWK.........", "...........KKKKK..................KKKKK.........", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "dance1": ["...........KKKKKK.........KKKKKK................", ".........KKDDDDDDK......KKDDDDDDK...............", "........KDDDDGDDDDK....KDDDDGDDDDK..............", ".......KDDDDGGGDDDDK..KDDDDGGGDDDDK.............", ".......KDDDDGDDDDDOOK.KDDDDGDDDDDOOK............", "........KKDDDDDOOOOOOKKKDDDDDOOOOOOK............", ".KKKKKK...KKKKKOOOOOOOHYYYYHOOOOOOOK............", "KDDDDDDK......KOOOOOOOHYYYYYYHOOOOOOK...........", "KDDDGDDDK....KOOOOOOOOHHHHHHHHHYYHOOOOK.........", "KDDGGGDDDK..KOOOOOOOOOHHHHHHHNNNNNNHOOOK........", "KDDDGDDDDK..KOOOOOOOOOHHHHHHNNHHHHHHNHOOOK......", ".KDDDDDDDK..KOOOOOOOOOHHHHHNHHHHHHHHNHHOOOK.....", "..KKDDDDDOK.KOOOOOOOOOHHHHHNHHHHHHHHNHOOOK......", "....KKDDDOOK.KOOOOOOOOOHHHHHHHHHHHHHHWWONK......", ".....KOOOOOOK.KOOOOOOOOHHHRRRHHHHWWWWWWONK......", "......KOOOOOOK.KOOOOOOOOHRRRRRRWWWWWWWWWWKK.....", ".......KOOOOOOKKDDDDDDDDDDWWWWWWWWWWWWWWK.......", "........KOOOOOOKDDDDDDDDDDDDDDDWWWWWWWK.........", ".........KOOOOOOKPPPPPPPPPPPPPWWWWWWWK...KKK....", ".........KOOOOOOOHHHHHHHHHHHHWWWWWWWWK..KWWWK...", "..........KOOOOOOTTOOOOOOOOTTOWWWWWWWK.KWWWWK...", "..........KOOOOOOTTOOOOOOOOTTOWWWWWWWWKKWWWK....", "...........KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWKK.....", "............KSSOOHHHHHHHHHHOOOWWWWWWWWWWKK......", ".............KSSWWWWWWWWWWWWWWWWWWWWWWWK........", ".............KWWK.KKCCCCCCCCCCCCCCCCKCCK........", "............KWWWWK....KKKKKKKKKKKK..KCCCK.......", "............KKKKK...................KKKK........", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"], "dance2": ["............KKKKKK.........KKKKKK...............", "..........KKDDDDDDK......KKDDDDDDK..............", ".........KDDDDGDDDDK....KDDDDGDDDDK.............", "........KDDDDGGGDDDDK..KDDDDGGGDDDDK............", "........KDDDDGDDDDDOOK.KDDDDGDDDDDOOK...........", ".........KKDDDDDOOOOOOKKKDDDDDOOOOOOK...........", "...........KKKKKOOOOOOOHYYYYHOOOOOOOK...........", "..KKKKKK.......KOOOOOOOHYYYYYYHOOOOOOK..........", ".KDDDDDDK.....KOOOOOOOOHHHHHHHHHYYHOOOOK........", "KDDDGDDDK....KOOOOOOOOOHHHHHHHNNNNNNHOOOK.......", "KDDGGGDDDK...KOOOOOOOOOHHHHHHNNGGGBBNHOOOK......", "KDDDGDDDDK...KOOOOOOOOOHHHHHHNNGGGBBNHOOOK......", ".KDDDDDDDK...KOOOOOOOOOHHHHHHHBBBBEEBHOOOK......", "..KKDDDDDOK...KOOOOOOOOOHHHHHHBEEEEAAHOOOK......", "....KKDDDOOK...KOOOOOOOOHHHHHHEEAAAAGHWWONK.....", ".....KOOOOOOK...KOOOOOOOOHHRRRHEAAAAGWWWWONK....", "......KOOOOOOK..KDDDDDDDDDDRRRWWWWWWWWWWWWKK....", ".......KOOOOOOK.KDDDDDDDDDDDDDDDWWWWWWWWWK......", "........KOOOOOOK.KPPPPPPPPPPPPPWWWWWWWWK....KKK.", "........KOOOOOOOHHHHHHHHHHHHHHWWWWWWWWK....KWWWK", ".........KOOOOOOTTOOOOOOOOTTOWWWWWWWWWK...KWWWWK", ".........KOOOOOOTTOOOOOOOOTTOWWWWWWWWWWKKKWWWWK.", "..........KOOOOOOOOOOOOOOOOOOWWWWWWWWWWWWWWWKK..", "...........KSSOOHHHHHHHHHHOOOWWWWWWWWWWWWWKK....", "............KSSWWWWWWWWWWWWWWWWWWWWWWWWWK.......", "............KCCK..KKCCCCCCCCCCCCCCCCKWWK........", "...........KCCCK......KKKKKKKKKKKK..KWWWWK......", "...........KKKK.....................KKKKK.......", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................", "................................................"]}};
  const BEAR_PALETTE = {"K": "#23192d", "N": "#120c1c", "D": "#3d2214", "M": "#29150c", "S": "#5e361e", "O": "#85502e", "H": "#a66a43", "Y": "#c98d63", "W": "#fff3e0", "C": "#e6cfb3", "P": "#ff9ebb", "R": "#ff7597", "B": "#0e2f70", "E": "#1f7ae0", "A": "#66ecff", "G": "#ffffff"};
  const BUTTERFLY_1 = ["..KKKK....KKKK..", ".KAAAAK..KAAAAK.", "KAAAGGAKKAGGAAAK", "KAAGGGAKKAGGGAAK", "KAAAGVVKKVVGAAAK", ".KAAVVVKKVVVAAK.", "..KKKKKNNKKKKK..", "..KVVVVNNVVVVK..", ".KVVYYYNNYYYVVK.", ".KVVYYYNNYYYVVK.", "..KVVVVKKVVVVK..", "...KKKK..KKKK...", "................", "................"];
  const BUTTERFLY_2 = [".....KKKKKK.....", "....KAAAAAAK....", "...KAAAGGAAAK...", "...KAAGGGAAAK...", "....KAAVVAAK....", "....KVVNNVVK....", ".....KNNNNK.....", "....KVVNNVVK....", "....KVYNNYVK....", ".....KVKKVK.....", "......KKKK......", "................", "................", "................"];
  const BALL_1 = ["....KKKKKK....", "..KKZZZZZZKK..", ".KZZZGGGGZZZK.", ".KZZGGGGZZZZK.", "KZZZZGGWWWWWWK", "KZZZZWWWWWWWWK", "KZZWWWWYYYYWWK", "KWWWWYYYYYYYYK", "KWWYYYYYYYYYYK", "KYYYYYYYYZZZZK", ".KYYYYZZZZZZK.", ".KZZZZZZZZZZK.", "..KKZZZZZZKK..", "....KKKKKK...."];
  const BALL_2 = ["....KKKKKK....", "..KKYYYYYYKK..", ".KYYYGGGGYYYK.", ".KYYGGGGYYYYK.", "KYYYYGGWWWWWWK", "KYYYYWWWWWWWWK", "KYYWWWWZZZZWWK", "KWWWWZZZZZZZZK", "KWWZZZZZZZZZZK", "KZZZZZZZZYYYYK", ".KZZZZYYYYYYK.", ".KYYYYYYYYYYK.", "..KKYYYYYYKK..", "....KKKKKK...."];
  const BEAR_WALK_1 = ["................................................", "...............KKKKK.........KKKKK..............", ".............KKDOOOOKK.....KKDOOOOKK............", "............KDOOOOOOOOK...KDOOOOOOOOK...........", "............KDOOPPPPOODK.KDOOPPPPOODK...........", "............KDOOPWWPOODK.KDOOPWWPOODK...........", "............KDOOOOOOOODKKKDOOOOOOOODK...........", ".............KDOOOOOOHYYYYYHOOOOOODK............", "............KDOOOOOOHYYYYYYYHOOOOOODK...........", "...........KOOOOOOOOHHHHHHHHHYYHOOOOOK..........", "..........KOOOOOOOOHHHHHHHNNNNNNHOOOOOK.........", ".........KOOOOOOOOHHHHHHNNGGGBBNHOOOOOOK........", ".........KOOOOOOOOHHHHHHNNGGGBBNHOOOOOOK........", "........KOOOOOOOOOHHHHHHHHBBBBEEBHOOOOOOK.......", "........KOOOOOOOOOHHHHHHHHBEEEEAAHOOOOOOK.......", "........KSOOOOOOOOOHHHHHHHEEAAAAGHWWWWONNK......", "........KSOOOOOOOOOOHHRRRHEAAAAGWWWWWWONNK......", ".........KSOOOOOOOOOOHRRRHOHAAAAWWWWWWWWKK......", ".........KSSOOOOOOOOOOHHHHHHWWWWWWWWWWWKK.......", "..........KSSOOOOOOOOOOOOOOOCCCCCCCCKKK.........", "...........KSSSOOOOOOOOOOOOOSSSSKKKK............", ".........KKKKKSSSSOOOOOOOOOOOOOOOWWWWK..........", "........KOOOOKSOOOOOOOOOOOOOOOOOWWWWWWK.........", ".......KOOOOOHKSOOOOOHHHHHHOOOOOOWWWWWWWK.......", ".......KOOOOOOKOOOOOOOOOOOOOOOOWWWWWWWWWK.......", "........KKOOOOKOOOOOOOOOOOOOOOOWWWWWWWWWK.......", "..........KKKKSSSSOOHHHHHHOOOOOOWWWWWWWWK.......", "..........KSSSSSSSOOOOOOOOOOOOOWWWWWWWK.........", "...........KSSSSSOOOOOOOOOWWWWWWWWWWK...........", "...........KDDK.KMMKKOOOOCCCCWWWWCK.............", "..........KDDDDKKMMK.KKKKKDDK.KMMK..............", "..........KKKKK.KKKK.....KDDDDKKKK..............", ".........................KKKKK..................", "................................................", "................................................", "................................................"];
  const BEAR_WALK_2 = ["................................................", "...............KKKKK.........KKKKK..............", ".............KKDOOOOKK.....KKDOOOOKK............", "............KDOOOOOOOOK...KDOOOOOOOOK...........", "............KDOOPPPPOODK.KDOOPPPPOODK...........", "............KDOOPWWPOODK.KDOOPWWPOODK...........", "............KDOOOOOOOODKKKDOOOOOOOODK...........", ".............KDOOOOOOHYYYYYHOOOOOODK............", "............KDOOOOOOHYYYYYYYHOOOOOODK...........", "...........KOOOOOOOOHHHHHHHHHYYHOOOOOK..........", "..........KOOOOOOOOHHHHHHHNNNNNNHOOOOOK.........", ".........KOOOOOOOOHHHHHHNNGGGBBNHOOOOOOK........", ".........KOOOOOOOOHHHHHHNNGGGBBNHOOOOOOK........", "........KOOOOOOOOOHHHHHHHHBBBBEEBHOOOOOOK.......", "........KOOOOOOOOOHHHHHHHHBEEEEAAHOOOOOOK.......", "........KSOOOOOOOOOHHHHHHHEEAAAAGHWWWWONNK......", "........KSOOOOOOOOOOHHRRRHEAAAAGWWWWWWONNK......", ".........KSOOOOOOOOOOHRRRHOHAAAAWWWWWWWWKK......", ".........KSSOOOOOOOOOOHHHHHHWWWWWWWWWWWKK.......", "..........KSSOOOOOOOOOOOOOOOCCCCCCCCKKK.........", ".........KKKKKSSSOOOOOOOOOOOSSSSKKKK............", "........KOOOOKSSSSOOOOOOOOOOOOOOOWWWWK..........", ".......KOOOOOHKSOOOOOOOOOOOOOOOOOWWWWWWK........", ".......KOOOOOOKSOOOOOHHHHHHOOOOOOWWWWWWWK.......", "........KKOOOOKOOOOOOOOOOOOOOOOWWWWWWWWWK.......", "..........KKKKKOOOOOOOOOOOOOOOOWWWWWWWWWK.......", "..........KSSSSSSSOOHHHHHHOOOOOOWWWWWWWWK.......", "..........KSSSSSSSOOOOOOOOOOOOOWWWWWWWK.........", "...........KSSSSSOOOOOOOOOWWWWWWWWWWK...........", "............KDDKKMMKKOOOOCCCCWWWWCK.............", "............KDDDKMMK.KKKKKDDK.KMMK..............", "............KKKKKKKK.....KDDDKKKK...............", ".........................KKKK...................", "................................................", "................................................", "................................................"];
  const BEAR_WALK_3 = ["................................................", "...............KKKKK.........KKKKK..............", ".............KKDOOOOKK.....KKDOOOOKK............", "............KDOOOOOOOOK...KDOOOOOOOOK...........", "............KDOOPPPPOODK.KDOOPPPPOODK...........", "............KDOOPWWPOODK.KDOOPWWPOODK...........", "............KDOOOOOOOODKKKDOOOOOOOODK...........", ".............KDOOOOOOHYYYYYHOOOOOODK............", "............KDOOOOOOHYYYYYYYHOOOOOODK...........", "...........KOOOOOOOOHHHHHHHHHYYHOOOOOK..........", "..........KOOOOOOOOHHHHHHHNNNNNNHOOOOOK.........", ".........KOOOOOOOOHHHHHHNNGGGBBNHOOOOOOK........", ".........KOOOOOOOOHHHHHHNNGGGBBNHOOOOOOK........", "........KOOOOOOOOOHHHHHHHHBBBBEEBHOOOOOOK.......", "........KOOOOOOOOOHHHHHHHHBEEEEAAHOOOOOOK.......", "........KSOOOOOOOOOHHHHHHHEEAAAAGHWWWWONNK......", "........KSOOOOOOOOOOHHRRRHEAAAAGWWWWWWONNK......", ".........KSOOOOOOOOOOHRRRHOHAAAAWWWWWWWWKK......", ".........KSSOOOOOOOOOOHHHHHHWWWWWWWWWWWKK.......", "..........KSSOOOOOOOOOOOOOOOCCCCCCCCKKK.........", "...........KSSSOOOOOOOOOOOOOSSSSKKKK............", ".........KKKKKSSSSOOOOOOOOOOOOOOOWWWWK..........", "........KOOOOKSOOOOOOOOOOOOOOOOOWWWWWWK.........", ".......KOOOOOHKSOOOOOHHHHHHOOOOOOWWWWWWWK.......", ".......KOOOOOOKOOOOOOOOOOOOOOOOWWWWWWWWWK.......", "........KKOOOOKOOOOOOOOOOOOOOOOWWWWWWWWWK.......", "..........KKKKSSSSOOHHHHHHOOOOOOWWWWWWWWK.......", "..........KSSSSSSSOOOOOOOOOOOOOWWWWWWWK.........", "...........KSSSSSOOOOOOOOOWWWWWWWWWWK...........", "...........KMMK.KDDKKOOOOCCCCWWWWCK.............", "..........KMMMK.KDDDKKKKKKMMK.KDDK..............", "..........KKKK..KKKKK....KMMMKKKKDK.............", ".........................KKKK.KKKK..............", "................................................", "................................................", "................................................"];
  const BEAR_WAVE_1 = ["................................................", ".............KKKKK.........KKKKK................", "...........KKDOOOOKK.....KKDOOOOKK..............", "..........KDOOOOOOOOK...KDOOOOOOOOK.............", "..........KDOOPPPPOODK.KDOOPPPPOODK.............", "..........KDOOPWWPOODK.KDOOPWWPOODK.............", "..........KDOOOOOOOODKKKDOOOOOOOODK.............", "...........KDOOOOOOHYYYYYHOOOOOODK..............", "..........KDOOOOOOHYYYYYYYHOOOOOODK.............", ".........KOOOOOOOOHHHHHHHHHYYHOOOOOK............", "........KOOOOOOOOHHHHHHHNNNNNNHOOOOOK...........", ".......KOOOOOOOOHHHHHHNNGGGBBNHOOOOOOK..........", ".......KOOOOOOOOHHHHHHNNGGGBBNHOOOOOOK..........", "......KOOOOOOOOOHHHHHHHHBBBBEEBHOOOOOOK.........", "......KOOOOOOOOOHHHHHHHHBEEEEAAHOOOOOOK.........", "......KSOOOOOOOOOHHHHHHHEEAAAAGHWWWWONNK........", "......KSOOOOOOOOOOHHRRRHEAAAAGWWWWWWONNK........", ".......KSOOOOOOOOOOHRRRHOHAAAAWWWWWWWWKK.KKKK...", ".......KSSOOOOOOOOOOHHHHHHWWWWWWWWWWWKK.KDDDDK..", "........KSSOOOOOOOOOOOOOOOCCCCCCCCKKK..KDOOOOOK.", ".........KSSSOOOOOOOOOOOOOSSSSKKKK....KOOOOOOOK.", ".......KKKKKSSSSOOOOOOOOOOOOOOOWWWWK.KOOOOOOOK..", "......KOOOOKSOOOOOOOOOOOOOOOOOWWWWWWKOOOOOOOK...", ".....KOOOOOHKSOOOOOHHHHHHOOOOOOWWWWWWWOOOOOK....", ".....KOOOOOOKOOOOOOOOOOOOOOOOWWWWWWWWWKKKKK.....", "......KKOOOOKOOOOOOOOOOOOOOOOWWWWWWWWWK.........", "........KKKKSSSSOOHHHHHHOOOOOOWWWWWWWWK.........", "........KSSSSSSSOOOOOOOOOOOOOWWWWWWWWK..........", ".........KSSSSSOOOOOOOOOWWWWWWWWWWWWK...........", ".........KKKKDDDDKKKKKKOOOOCCCCWWWWCK...........", ".............KDDDDDK...KKKKDDDDDDKKK............", ".............KKKKKK........KKKKKK...............", "................................................", "................................................", "................................................", "................................................"];
  const BEAR_WAVE_2 = ["................................................", ".............KKKKK.........KKKKK................", "...........KKDOOOOKK.....KKDOOOOKK..............", "..........KDOOOOOOOOK...KDOOOOOOOOK.............", "..........KDOOPPPPOODK.KDOOPPPPOODK.............", "..........KDOOPWWPOODK.KDOOPWWPOODK.............", "..........KDOOOOOOOODKKKDOOOOOOOODK.............", "...........KDOOOOOOHYYYYYHOOOOOODK..............", "..........KDOOOOOOHYYYYYYYHOOOOOODK.............", ".........KOOOOOOOOHHHHHHHHHYYHOOOOOK............", "........KOOOOOOOOHHHHHHHSSSSSSHOOOOOK...........", ".......KOOOOOOOOHHHHHHHOOOOOOOHOOOOOOK..........", ".......KOOOOOOOOHHHHHHHNNNNNNNHOOOOOOK..........", "......KOOOOOOOOOHHHHHHHHBBBBEEBHOOOOOOK.........", "......KOOOOOOOOOHHHHHHHHBEEEEAAHOOOOOOK.........", "......KSOOOOOOOOOHHHHHHHEEAAAAGHWWWWONNK........", "......KSOOOOOOOOOOHHRRRHEAAAAGWWWWWWONNK........", ".......KSOOOOOOOOOOHRRRHOHAAAAWWWWWWWWKK........", ".......KSSOOOOOOOOOOHHHHHHWWWWWWWWWWWKK...KKKK..", "........KSSOOOOOOOOOOOOOOOCCCCCCCCKKK....KDDDDK.", ".......KKKKKSSSOOOOOOOOOOOSSSSKKKK......KDOOOOOK", "......KOOOOKSSSSOOOOOOOOOOOOOOOWWWWK...KOOOOOOOK", ".....KOOOOOHKSOOOOOOOOOOOOOOOOOWWWWWWK.KOOOOOOK.", ".....KOOOOOOKSOOOOOHHHHHHOOOOOOWWWWWWWKOOOOOOK..", "......KKOOOOKOOOOOOOOOOOOOOOOWWWWWWWWWOOOOOK....", "........KKKKKOOOOOOOOOOOOOOOOWWWWWWWWWKKKKK.....", "........KSSSSSSSOOHHHHHHOOOOOOWWWWWWWWK.........", "........KSSSSSSSOOOOOOOOOOOOOWWWWWWWWK..........", ".........KSSSSSOOOOOOOOOWWWWWWWWWWWWK...........", ".........KKKKDDDDKKKKKKOOOOCCCCWWWWCK...........", ".............KDDDDDK...KKKKDDDDDDKKK............", ".............KKKKKK........KKKKKK...............", "................................................", "................................................", "................................................", "................................................"];

  let currentSpecies = localStorage.getItem("companion_species") || "fox";
  if (!PALETTES[currentSpecies]) currentSpecies = "fox";
  let use3D = localStorage.getItem("companion_3d") !== "false";

  function getMeta(sp = currentSpecies) {
    return SPECIES_META.find((m) => m.id === sp) || SPECIES_META[0];
  }

  const SPRITE_W = 48;
  const SPRITE_H = 36;
  const SCALE = 2;
  const WIDTH = SPRITE_W * SCALE;
  const HEIGHT = SPRITE_H * SCALE;

  // === True 3D Raymarched Signed Distance Field (SDF) Plushie / Clay Renderer ===
  const STYLES_3D = {
    fox:        { geom: "fox",     coat: [1.00,0.43,0.14], crown: [1.00,0.68,0.28], white: [1.00,0.97,0.92], boots: [0.26,0.14,0.09], pink: [1.00,0.62,0.74], blush: [1.00,0.45,0.59], nose: [0.07,0.05,0.11], eyeTop: [0.05,0.18,0.46], eyeMid: [0.13,0.50,0.90], eyeBot: [0.42,0.95,1.00], stripe: null },
    fennec:     { geom: "fennec",  coat: [0.96,0.75,0.49], crown: [1.00,0.88,0.68], white: [1.00,0.98,0.94], boots: [0.45,0.26,0.13], pink: [1.00,0.62,0.74], blush: [1.00,0.45,0.59], nose: [0.09,0.05,0.04], eyeTop: [0.05,0.18,0.46], eyeMid: [0.13,0.50,0.90], eyeBot: [0.42,0.95,1.00], stripe: null },
    arctic:     { geom: "fox",     coat: [0.86,0.93,1.00], crown: [0.96,0.99,1.00], white: [1.00,1.00,1.00], boots: [0.36,0.45,0.60], pink: [1.00,0.64,0.76], blush: [1.00,0.52,0.66], nose: [0.08,0.10,0.16], eyeTop: [0.05,0.18,0.46], eyeMid: [0.14,0.55,1.00], eyeBot: [0.52,0.96,1.00], stripe: null },
    white_cat:  { geom: "cat",     coat: [0.94,0.96,1.00], crown: [1.00,1.00,1.00], white: [1.00,1.00,1.00], boots: [1.00,1.00,1.00], pink: [1.00,0.64,0.76], blush: [1.00,0.46,0.60], nose: [1.00,0.45,0.58], eyeTop: [0.05,0.18,0.46], eyeMid: [0.13,0.50,0.90], eyeBot: [0.42,0.95,1.00], stripe: null },
    orange_cat: { geom: "cat",     coat: [1.00,0.53,0.16], crown: [1.00,0.72,0.32], white: [1.00,0.97,0.92], boots: [1.00,0.97,0.92], pink: [1.00,0.62,0.74], blush: [1.00,0.45,0.59], nose: [1.00,0.44,0.56], eyeTop: [0.04,0.31,0.24], eyeMid: [0.10,0.62,0.45], eyeBot: [0.34,0.95,0.75], stripe: [0.70,0.22,0.05] },
    grey_cat:   { geom: "cat",     coat: [0.50,0.55,0.63], crown: [0.64,0.70,0.78], white: [0.94,0.96,0.99], boots: [0.94,0.96,0.99], pink: [1.00,0.62,0.74], blush: [1.00,0.45,0.59], nose: [1.00,0.46,0.60], eyeTop: [0.07,0.28,0.43], eyeMid: [0.13,0.54,0.72], eyeBot: [0.42,0.95,0.90], stripe: [0.25,0.28,0.34] },
    chillet:    { geom: "chillet", coat: [0.45,0.78,1.00], crown: [0.68,0.90,1.00], white: [1.00,0.98,0.95], boots: [1.00,0.98,0.95], pink: [0.14,0.23,0.48], blush: [1.00,0.42,0.60], nose: [0.08,0.11,0.20], eyeTop: [0.09,0.14,0.33], eyeMid: [0.20,0.34,0.72], eyeBot: [0.45,0.70,1.00], stripe: [0.14,0.23,0.48] },
    bear:       { geom: "bear",    coat: [0.52,0.31,0.18], crown: [0.68,0.44,0.27], white: [1.00,0.95,0.88], boots: [0.24,0.13,0.08], pink: [1.00,0.62,0.74], blush: [1.00,0.45,0.59], nose: [0.07,0.05,0.11], eyeTop: [0.05,0.18,0.46], eyeMid: [0.13,0.50,0.90], eyeBot: [0.42,0.95,1.00], stripe: null }
  };

  const CACHE_3D = new Map();

  function smin3D(a, b, k) {
    const h = Math.max(k - Math.abs(a - b), 0.0) / k;
    return Math.min(a, b) - h * h * k * 0.25;
  }
  function smoothstep3D(e0, e1, x) {
    const t = Math.max(0.0, Math.min(1.0, (x - e0) / (e1 - e0)));
    return t * t * (3.0 - 2.0 * t);
  }
  function mixRgb3D(c1, c2, t) {
    return [c1[0] * (1 - t) + c2[0] * t, c1[1] * (1 - t) + c2[1] * t, c1[2] * (1 - t) + c2[2] * t];
  }
  function sdEllipsoid3D(px, py, pz, cx, cy, cz, rx, ry, rz) {
    const dx = (px - cx) / rx, dy = (py - cy) / ry, dz = (pz - cz) / rz;
    const k0 = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (k0 < 1e-6) return -Math.min(rx, ry, rz);
    const dx2 = (px - cx) / (rx * rx), dy2 = (py - cy) / (ry * ry), dz2 = (pz - cz) / (rz * rz);
    const k1 = Math.sqrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2);
    return k0 * (k0 - 1.0) / k1;
  }
  function sdCapsule3D(px, py, pz, ax, ay, az, bx, by, bz, r1, r2) {
    const pax = px - ax, pay = py - ay, paz = pz - az;
    const bax = bx - ax, bay = by - ay, baz = bz - az;
    const b2 = bax * bax + bay * bay + baz * baz;
    const h = Math.max(0.0, Math.min(1.0, (pax * bax + pay * bay + paz * baz) / b2));
    const r = r1 + (r2 - r1) * h;
    const dx = pax - bax * h, dy = pay - bay * h, dz = paz - baz * h;
    return Math.sqrt(dx * dx + dy * dy + dz * dz) - r;
  }

  function render3DPoseCanvas(spId, pose, scale) {
    const st = STYLES_3D[spId] || STYLES_3D.fox;
    const geom = st.geom;
    const W = 48 * scale, H = 36 * scale;
    const c = document.createElement("canvas");
    c.width = W;
    c.height = H;
    const ctx = c.getContext("2d");
    const img = ctx.createImageData(W, H);
    const buf = img.data;

    const isSleep = pose.startsWith("sleep");
    const isSit = pose.startsWith("sit") || pose.startsWith("bearWave");
    const isDance = pose.startsWith("dance");
    const isJump = pose === "jump1";
    const isEyeClosed = isSleep || pose === "sit2" || pose === "dance1" || pose === "bearWave2";

    const shY = isSleep ? 0.90 : 0.88;
    const shRx = isSleep ? 0.34 : 0.26;
    for (let y = Math.floor(H * 0.76); y < H; y++) {
      for (let x = Math.floor(W * 0.12); x < Math.floor(W * 0.88); x++) {
        const sx = (x - W * 0.52) / (W * shRx);
        const sy = (y - H * shY) / (H * 0.06);
        const sd2 = sx * sx + sy * sy;
        if (sd2 < 1.0) {
          const idx = (y * W + x) * 4;
          buf[idx] = 10; buf[idx + 1] = 6; buf[idx + 2] = 18;
          buf[idx + 3] = Math.round(((1.0 - sd2) ** 2) * 105);
        }
      }
    }

    const hyOff = isSleep ? 5.2 : ((isSit || isDance) ? -0.8 : (pose === "walk2" ? 0.4 : 0.0));
    const hxOff = isSit ? -1.5 : 0.0;
    const breathe = pose === "sleep2" ? 0.35 : 0.0;
    const tailWag = (pose === "walk2" || pose === "sit2" || pose === "dance1" || pose === "sleep2") ? 1.2 : ((pose === "walk3" || pose === "dance2") ? -0.8 : 0.0);

    const headCx = 28.5 + hxOff, headCy = 13.8 + hyOff;
    const snootCx = (geom === "cat" ? 38.2 : 38.8) + hxOff, snootCy = 17.0 + hyOff;
    const noseCx = (geom === "cat" ? 40.3 : 41.3) + hxOff, noseCy = 16.5 + hyOff;
    const eyeCx = 34.4 + hxOff, eyeCy = 15.0 + hyOff;

    let lastFace = 999, lastEars = 999, lastTail = 999;

    function evalSdf(px, py, pz) {
      const dHead = sdEllipsoid3D(px, py, pz, headCx, headCy, 0.0, 10.5, 7.8, 9.2);
      const dCheek = sdEllipsoid3D(px, py, pz, 23.0 + hxOff, 16.8 + hyOff, 2.2, 5.8, 3.6, 6.2);
      const snootLen = geom === "cat" ? 2.4 : 3.2;
      const dSnoot = sdEllipsoid3D(px, py, pz, snootCx, snootCy, 0.5, snootLen, 2.0, 3.0);
      const dFace = smin3D(smin3D(dHead, dCheek, 2.2), dSnoot, 1.5);

      let dEarL, dEarR;
      if (geom === "fennec") {
        dEarL = sdCapsule3D(px, py, pz, 21.0 + hxOff, 9.5 + hyOff, 1.5, 14.5 + hxOff, 1.5 + hyOff, 1.0, 4.4, 2.2);
        dEarR = sdCapsule3D(px, py, pz, 31.0 + hxOff, 9.2 + hyOff, -1.5, 34.5 + hxOff, 1.5 + hyOff, -1.0, 4.2, 2.2);
      } else if (geom === "cat") {
        dEarL = sdCapsule3D(px, py, pz, 21.8 + hxOff, 9.2 + hyOff, 1.5, 19.2 + hxOff, 3.2 + hyOff, 1.0, 3.6, 0.9);
        dEarR = sdCapsule3D(px, py, pz, 31.2 + hxOff, 9.0 + hyOff, -1.5, 31.8 + hxOff, 3.2 + hyOff, -1.0, 3.5, 0.9);
      } else if (geom === "bear") {
        dEarL = sdEllipsoid3D(px, py, pz, 19.5 + hxOff, 5.5 + hyOff, 1.5, 3.8, 3.6, 2.2);
        dEarR = sdEllipsoid3D(px, py, pz, 32.0 + hxOff, 5.5 + hyOff, -1.5, 3.8, 3.6, 2.2);
      } else if (geom === "chillet") {
        dEarL = smin3D(
          sdCapsule3D(px, py, pz, 22.0 + hxOff, 8.5 + hyOff, 1.5, 17.5 + hxOff, 3.5 + hyOff, 1.2, 2.8, 2.4),
          sdEllipsoid3D(px, py, pz, 14.8 + hxOff, 3.8 + hyOff, 1.2, 3.2, 2.4, 2.2), 1.2
        );
        dEarR = smin3D(
          sdCapsule3D(px, py, pz, 30.5 + hxOff, 8.5 + hyOff, -1.5, 26.5 + hxOff, 3.5 + hyOff, -1.2, 2.7, 2.3),
          sdEllipsoid3D(px, py, pz, 24.0 + hxOff, 3.8 + hyOff, -1.2, 3.0, 2.3, 2.2), 1.2
        );
      } else {
        dEarL = sdCapsule3D(px, py, pz, 21.5 + hxOff, 9.2 + hyOff, 1.5, 17.8 + hxOff, 1.8 + hyOff, 1.0, 3.8, 0.95);
        dEarR = sdCapsule3D(px, py, pz, 31.0 + hxOff, 9.0 + hyOff, -1.5, 31.4 + hxOff, 1.8 + hyOff, -1.0, 3.6, 0.95);
      }
      const dEars = Math.min(dEarL, dEarR);

      let dTorso, dTail, dLegs = 999.0;
      if (isSleep) {
        dTorso = sdEllipsoid3D(px, py, pz, 19.5, 24.5 - breathe * 0.5, -1.0, 11.5, 6.5 + breathe, 7.5);
        const dT1 = sdCapsule3D(px, py, pz, 13.0, 25.5, 1.5, 25.0, 28.5, 3.8, 4.2, 4.8);
        const dT2 = sdCapsule3D(px, py, pz, 25.0, 28.5, 3.8, 39.5, 26.0 - breathe, 4.2, 4.8, 5.2);
        const dT3 = sdCapsule3D(px, py, pz, 39.5, 26.0 - breathe, 4.2, 44.2, 21.5 - breathe, 3.8, 5.2, 2.2);
        dTail = smin3D(smin3D(dT1, dT2, 2.0), dT3, 1.8);
      } else {
        if (isSit || isDance) {
          const dChest = sdEllipsoid3D(px, py, pz, 30.2, 23.2, 1.8, 6.4, 5.5, 6.5);
          const dBody = sdEllipsoid3D(px, py, pz, 24.5, 25.8, 0.0, 7.2, 5.8, 6.2);
          dTorso = smin3D(dChest, dBody, 2.2);
        } else {
          const dChest = sdEllipsoid3D(px, py, pz, 31.8, 24.2, 1.8, 6.8, 5.2, 6.8);
          const dBody = sdEllipsoid3D(px, py, pz, 23.8, 25.2, 0.0, 8.2, 4.8, 6.2);
          dTorso = smin3D(dChest, dBody, 2.2);
        }
        if (geom === "chillet") {
          const dCollar = sdEllipsoid3D(px, py, pz, 28.5 + hxOff * 0.5, 20.5, 1.8, 6.2, 1.8, 6.5);
          dTorso = smin3D(dTorso, dCollar, 0.7);
        }

        const txShift = isSit ? -1.2 : 0.0;
        if (geom === "cat") {
          const dT1 = sdCapsule3D(px, py, pz, 16.5 + txShift, 24.5, -0.8, 11.2 + txShift + tailWag * 0.5, 12.0, 0.5, 2.1, 1.9);
          const dT2 = sdCapsule3D(px, py, pz, 11.2 + txShift + tailWag * 0.5, 12.0, 0.5, 8.5 + txShift + tailWag, 3.5, 1.0, 1.9, 1.8);
          const dT3 = sdCapsule3D(px, py, pz, 8.5 + txShift + tailWag, 3.5, 1.0, 5.2 + txShift + tailWag, 4.2, 1.2, 1.8, 1.5);
          dTail = smin3D(smin3D(dT1, dT2, 1.2), dT3, 1.0);
        } else if (geom === "bear") {
          dTail = sdEllipsoid3D(px, py, pz, 14.2 + txShift, 23.5 + tailWag * 0.4, -0.5, 3.4, 3.2, 3.2);
        } else if (geom === "chillet") {
          const dT1 = sdCapsule3D(px, py, pz, 16.8 + txShift, 25.0, -0.8, 9.5 + txShift, 18.0 + tailWag, 0.8, 2.8, 2.4);
          const dT2 = sdEllipsoid3D(px, py, pz, 6.8 + txShift, 14.5 + tailWag, 1.2, 3.8, 3.2, 2.8);
          dTail = smin3D(dT1, dT2, 1.4);
        } else {
          const dT1 = sdCapsule3D(px, py, pz, 17.2 + txShift, 25.2, -1.0, 11.0 + txShift, 18.0 + tailWag * 0.6, 0.8, 2.8, 5.0);
          const dT2 = sdCapsule3D(px, py, pz, 11.0 + txShift, 18.0 + tailWag * 0.6, 0.8, 6.8 + txShift, 10.8 + tailWag, 1.6, 5.0, 3.8);
          const dT3 = sdCapsule3D(px, py, pz, 6.8 + txShift, 10.8 + tailWag, 1.6, 4.8 + txShift, 8.2 + tailWag, 1.8, 3.8, 1.1);
          dTail = smin3D(smin3D(dT1, dT2, 2.0), dT3, 1.6);
        }

        let dFl, dFr, dBl, dBr;
        if (isDance) {
          const ay1 = pose === "dance1" ? 20.5 : 22.5;
          const ay2 = pose === "dance1" ? 22.5 : 20.5;
          dFl = sdCapsule3D(px, py, pz, 33.0, 23.5, 2.8, 39.5, ay1, 3.0, 2.0, 1.7);
          dFr = sdCapsule3D(px, py, pz, 34.5, 24.0, -2.4, 41.0, ay2, -2.0, 1.9, 1.6);
          dBl = sdCapsule3D(px, py, pz, 21.5, 28.0, 2.6, 20.5, 31.4, 2.6, 2.1, 1.7);
          dBr = sdCapsule3D(px, py, pz, 26.5, 28.0, -2.4, 27.5, 31.2, -2.4, 1.9, 1.6);
        } else if (pose.startsWith("bearWave")) {
          const wy = pose === "bearWave1" ? 18.5 : 20.8;
          dFl = sdCapsule3D(px, py, pz, 33.5, 23.0, 2.8, 40.2, wy, 3.0, 2.2, 1.9);
          dFr = sdCapsule3D(px, py, pz, 30.5, 27.5, -2.4, 31.0, 31.0, -2.4, 2.0, 1.8);
          dBl = sdCapsule3D(px, py, pz, 21.5, 28.0, 2.6, 21.5, 31.2, 2.6, 2.2, 1.9);
          dBr = sdCapsule3D(px, py, pz, 25.5, 28.0, -2.4, 25.5, 31.0, -2.4, 2.0, 1.8);
        } else if (isSit) {
          dFl = sdCapsule3D(px, py, pz, 28.5, 27.2, 2.6, 29.2, 30.8, 2.8, 2.1, 1.8);
          dFr = sdCapsule3D(px, py, pz, 32.5, 27.2, -2.4, 33.2, 30.6, -2.4, 1.9, 1.7);
          dBl = sdEllipsoid3D(px, py, pz, 21.5, 29.5, 2.6, 3.2, 2.0, 2.4);
          dBr = sdEllipsoid3D(px, py, pz, 24.5, 29.5, -2.4, 2.8, 1.8, 2.2);
        } else if (isJump) {
          dFl = sdCapsule3D(px, py, pz, 31.0, 27.2, 2.6, 35.5, 29.8, 2.6, 2.0, 1.6);
          dFr = sdCapsule3D(px, py, pz, 34.0, 27.2, -2.4, 38.0, 29.5, -2.4, 1.9, 1.5);
          dBl = sdCapsule3D(px, py, pz, 17.0, 27.2, 2.6, 12.8, 29.8, 2.6, 2.0, 1.6);
          dBr = sdCapsule3D(px, py, pz, 20.0, 27.2, -2.4, 16.0, 29.5, -2.4, 1.9, 1.5);
        } else {
          const s1 = pose === "walk1" ? -1.6 : (pose === "walk3" ? 1.6 : 0.0);
          dFl = sdCapsule3D(px, py, pz, 29.2, 27.8, 2.6, 29.5 - s1, 31.4, 2.6, 2.1, 1.7);
          dFr = sdCapsule3D(px, py, pz, 33.6, 27.8, -2.4, 34.0 + s1, 31.0, -2.4, 1.9, 1.6);
          dBl = sdCapsule3D(px, py, pz, 16.8, 27.8, 2.6, 16.0 + s1, 31.4, 2.6, 2.1, 1.7);
          dBr = sdCapsule3D(px, py, pz, 20.8, 27.8, -2.4, 20.8 - s1, 31.0, -2.4, 1.9, 1.6);
        }
        dLegs = Math.min(Math.min(dFl, dFr), Math.min(dBl, dBr));
      }

      const dNose = sdEllipsoid3D(px, py, pz, noseCx, noseCy, 1.0, 1.15, 0.9, 1.15);
      let dMain = smin3D(dFace, dEars, 0.9);
      dMain = smin3D(dMain, dTorso, 1.4);
      dMain = smin3D(dMain, dTail, isSleep ? 1.1 : 1.3);
      if (!isSleep) dMain = smin3D(dMain, dLegs, 1.0);
      if (!isEyeClosed) {
        const dEye = sdEllipsoid3D(px, py, pz, eyeCx, eyeCy, 6.8, 2.8, 3.6, 2.8);
        dMain = smin3D(dMain, dEye, 0.4);
      }
      dMain = Math.min(dMain, dNose);
      lastFace = dFace; lastEars = dEars; lastTail = dTail;
      return dMain;
    }

    let lx = 0.30, ly = -0.52, lz = 0.80;
    const lLen = Math.hypot(lx, ly, lz);
    lx /= lLen; ly /= lLen; lz /= lLen;
    let hx = lx, hy = ly, hz = lz + 1.0;
    const hLen = Math.hypot(hx, hy, hz);
    hx /= hLen; hy /= hLen; hz /= hLen;

    for (let y = 0; y < H; y++) {
      const py = (y + 0.5) / scale;
      for (let x = 0; x < W; x++) {
        const px = (x + 0.5) / scale;
        let pz = 12.0, hit = false;
        for (let i = 0; i < 34; i++) {
          const d = evalSdf(px, py, pz);
          if (d < 0.045) { hit = true; break; }
          pz -= Math.max(0.16, d * 0.86);
          if (pz < -12.0) break;
        }
        if (!hit) continue;

        evalSdf(px, py, pz);
        const onEar = (lastEars < lastFace + 0.35) && (py < 10.2 + hyOff);
        const onFrontTail = isSleep && (lastTail < lastFace + 0.2) && (pz > 2.2);

        const eps = 0.07;
        let nx = evalSdf(px + eps, py, pz) - evalSdf(px - eps, py, pz);
        let ny = evalSdf(px, py + eps, pz) - evalSdf(px, py - eps, pz);
        let nz = evalSdf(px, py, pz + eps) - evalSdf(px, py, pz - eps);
        const nLen = Math.hypot(nx, ny, nz) + 1e-6;
        nx /= nLen; ny /= nLen; nz /= nLen;

        const crownW = Math.max(0.0, 1.0 - (((px - (29.0 + hxOff)) / 8.0) ** 2 + ((py - (9.5 + hyOff)) / 4.0) ** 2));
        let rgb = mixRgb3D(st.coat, st.crown, crownW * 0.55);
        let isGlossy = false;

        if (st.stripe && geom === "cat") {
          if ((!isSleep && px < 17.5 && Math.sin(py * 1.65) > 0.25) || (isSleep && onFrontTail && Math.sin(px * 1.5) > 0.3)) {
            rgb = mixRgb3D(rgb, st.stripe, 0.78);
          } else if (px >= 20.0 && px < 27.5 && py > 21.0 && py < 27.0 && Math.sin(px * 1.9) > 0.3) {
            rgb = mixRgb3D(rgb, st.stripe, 0.72);
          } else if (py > 7.2 + hyOff && py < 10.5 + hyOff && Math.abs(px - (28.5 + hxOff)) < 3.2 && Math.sin(px * 2.5) > 0.2) {
            rgb = mixRgb3D(rgb, st.stripe, 0.65);
          }
        }

        if (geom === "chillet") {
          const txP = isSleep ? 42.5 : 6.8;
          const tyP = isSleep ? 23.0 : (14.5 + tailWag);
          const dPlume = Math.hypot(px - txP, py - tyP);
          if (dPlume < 4.5) {
            rgb = mixRgb3D(rgb, st.pink, 1.0 - smoothstep3D(3.5, 4.3, dPlume));
            if (Math.abs(px - txP) + Math.abs(py - tyP) < 1.3) rgb = [1.0, 1.0, 1.0];
          }
          if (onEar) {
            const dEt1 = Math.hypot(px - (15.2 + hxOff), py - (3.8 + hyOff));
            const dEt2 = Math.hypot(px - (24.2 + hxOff), py - (3.8 + hyOff));
            const dEt = Math.min(dEt1, dEt2);
            if (dEt < 4.0) {
              rgb = mixRgb3D(rgb, st.pink, 1.0 - smoothstep3D(3.2, 3.9, dEt));
              if ((Math.abs(px - (15.2 + hxOff)) + Math.abs(py - (3.8 + hyOff)) < 1.2) || (Math.abs(px - (24.2 + hxOff)) + Math.abs(py - (3.8 + hyOff)) < 1.2)) {
                rgb = [1.0, 1.0, 1.0];
              }
            }
          }
          if (!isSleep) {
            const dColRing = sdEllipsoid3D(px, py, 0.0, 28.5 + hxOff * 0.5, 20.5, 0.0, 6.2, 1.4, 10.0);
            if (dColRing < 0.3) rgb = mixRgb3D(rgb, st.pink, 1.0 - smoothstep3D(-0.2, 0.25, dColRing));
          }
        }

        if (isSleep) {
          if (geom === "fox" || geom === "fennec") {
            const tCol = geom === "fox" ? st.white : st.boots;
            const dTip = Math.hypot(px - 41.5, py - 23.5);
            rgb = mixRgb3D(rgb, tCol, 1.0 - smoothstep3D(5.5, 6.8, dTip));
          }
        } else {
          const txS = isSit ? -1.2 : 0.0;
          if (geom === "fox" || geom === "fennec") {
            const tCol = geom === "fox" ? st.white : st.boots;
            const dTip = Math.sqrt((px - (6.2 + txS)) ** 2 + ((py - (10.0 + tailWag)) ** 2) * 1.1);
            rgb = mixRgb3D(rgb, tCol, 1.0 - smoothstep3D(5.0, 6.0, dTip));
          }
        }

        if (!onFrontTail) {
          if (geom !== "bear") {
            const dCheekW = sdEllipsoid3D(px, py, 0.0, 29.5 + hxOff, 18.8 + hyOff, 0.0, 10.8, 3.3, 10.0);
            const dChestW = !isSleep ? sdEllipsoid3D(px, py, 0.0, 32.8 + hxOff * 0.5, 24.8, 0.0, 6.8, 5.5, 10.0) : 99.0;
            let wRuff = 1.0 - smoothstep3D(-0.3, 0.5, Math.min(dCheekW, dChestW));
            if (geom === "chillet" && !isSleep && Math.abs(py - 20.5) < 1.3 && px < 34.0) wRuff = 0.0;
            rgb = mixRgb3D(rgb, st.white, wRuff);
          } else {
            const dMuzzleW = sdEllipsoid3D(px, py, 0.0, 38.0 + hxOff, 17.5 + hyOff, 0.0, 3.8, 2.5, 10.0);
            const dBellyW = sdEllipsoid3D(px, py, 0.0, 32.5 + hxOff * 0.5, 25.0, 0.0, 5.8, 4.8, 10.0);
            rgb = mixRgb3D(rgb, st.white, 1.0 - smoothstep3D(-0.2, 0.4, Math.min(dMuzzleW, dBellyW)));
          }
        }

        if (onEar && geom !== "chillet") {
          let dPinkL, dPinkR;
          if (geom === "fennec") {
            dPinkL = sdCapsule3D(px, py, 0.0, 20.5 + hxOff, 8.5 + hyOff, 0.0, 15.5 + hxOff, 2.8 + hyOff, 0.0, 2.8, 1.4);
            dPinkR = sdCapsule3D(px, py, 0.0, 31.2 + hxOff, 8.2 + hyOff, 0.0, 33.8 + hxOff, 2.8 + hyOff, 0.0, 2.6, 1.4);
          } else if (geom === "bear") {
            dPinkL = sdEllipsoid3D(px, py, 0.0, 19.5 + hxOff, 5.8 + hyOff, 0.0, 2.1, 2.0, 5.0);
            dPinkR = sdEllipsoid3D(px, py, 0.0, 32.0 + hxOff, 5.8 + hyOff, 0.0, 2.1, 2.0, 5.0);
          } else {
            dPinkL = sdCapsule3D(px, py, 0.0, 21.0 + hxOff, 8.0 + hyOff, 0.0, 19.0 + hxOff, 4.2 + hyOff, 0.0, 1.8, 0.7);
            dPinkR = sdCapsule3D(px, py, 0.0, 31.0 + hxOff, 7.8 + hyOff, 0.0, 31.3 + hxOff, 4.2 + hyOff, 0.0, 1.6, 0.7);
          }
          const wPink = 1.0 - smoothstep3D(-0.15, 0.35, Math.min(dPinkL, dPinkR));
          rgb = mixRgb3D(rgb, st.pink, wPink);
          if ((geom === "fox" || geom === "fennec") && py < 5.5 + hyOff) {
            const wTip = (1.0 - smoothstep3D(3.5 + hyOff, 5.0 + hyOff, py)) * (1.0 - wPink * 0.85);
            rgb = mixRgb3D(rgb, st.boots, wTip);
          }
        }

        if (!isSleep && py > 28.6) {
          const wBoot = smoothstep3D(28.8, 29.8, py);
          const bootCol = pz >= 0.0 ? st.boots : [st.boots[0] * 0.65, st.boots[1] * 0.65, st.boots[2] * 0.65];
          rgb = mixRgb3D(rgb, bootCol, wBoot);
        }

        if (!onFrontTail) {
          const dBlush = ((px - (30.0 + hxOff)) / 2.1) ** 2 + ((py - (18.0 + hyOff)) / 1.2) ** 2;
          if (dBlush < 1.4) rgb = mixRgb3D(rgb, st.blush, (1.0 - smoothstep3D(0.3, 1.2, dBlush)) * 0.85);

          const dNose = ((px - noseCx) / 1.35) ** 2 + ((py - noseCy) / 1.05) ** 2;
          if (dNose < 1.2) {
            rgb = mixRgb3D(rgb, st.nose, 1.0 - smoothstep3D(0.7, 1.1, dNose));
            isGlossy = true;
          }

          if (isEyeClosed) {
            const archDir = isSleep ? -0.10 : 0.22;
            const baseY = isSleep ? (eyeCy + 1.0) : (eyeCy - 1.1);
            const archY = baseY + archDir * ((px - eyeCx) ** 2);
            if (Math.abs(px - eyeCx) < 2.6 && Math.abs(py - archY) < 0.75) {
              const wArch = 1.0 - smoothstep3D(0.38, 0.75, Math.abs(py - archY));
              rgb = mixRgb3D(rgb, [0.07, 0.05, 0.11], wArch);
            }
          } else {
            const ex = (px - eyeCx) / 2.65, ey = (py - eyeCy) / 3.55;
            const ed = Math.hypot(ex, ey);
            if (ed < 1.12) {
              const wEye = 1.0 - smoothstep3D(0.92, 1.10, ed);
              isGlossy = true;
              const lashY = (eyeCy - 2.9) + 0.12 * ((px - eyeCx) ** 2);
              let eyeCol;
              if (py < lashY + 0.8) {
                eyeCol = [0.07, 0.05, 0.11];
              } else {
                const tIris = Math.max(0.0, Math.min(1.0, (py - (eyeCy - 2.5)) / 5.4));
                eyeCol = tIris < 0.5 ? mixRgb3D(st.eyeTop, st.eyeMid, tIris * 2.0) : mixRgb3D(st.eyeMid, st.eyeBot, (tIris - 0.5) * 2.0);
                const sp1 = ((px - (eyeCx - 1.1)) / 1.15) ** 2 + ((py - (eyeCy - 1.4)) / 1.25) ** 2;
                const sp2 = ((px - (eyeCx + 1.3)) / 0.65) ** 2 + ((py - (eyeCy + 1.8)) / 0.65) ** 2;
                const wSp = 1.0 - smoothstep3D(0.65, 1.05, Math.min(sp1, sp2));
                eyeCol = mixRgb3D(eyeCol, [1.0, 1.0, 1.0], wSp);
              }
              rgb = mixRgb3D(rgb, eyeCol, wEye);
            }
          }
        }

        const ndotl = nx * lx + ny * ly + nz * lz;
        const ndoth = Math.max(0.0, nx * hx + ny * hy + nz * hz);
        const wrap = ndotl * 0.5 + 0.5;
        const diff = 0.36 + 0.76 * (wrap * wrap);
        const sss = Math.max(0.0, 1.0 - Math.abs(ndotl) * 1.5) * 0.11;
        const spec = Math.pow(ndoth, isGlossy ? 30.0 : 14.0) * (isGlossy ? 0.58 : 0.18);
        const rim = Math.pow(Math.max(0.0, 1.0 - Math.max(0.0, nz)), 2.4) * Math.max(0.0, -ny * 0.7 + 0.3) * 0.28;
        const edgeDarken = 0.38 + 0.62 * smoothstep3D(0.0, 0.32, Math.max(0.0, nz));

        const idx = (y * W + x) * 4;
        buf[idx]     = Math.max(0, Math.min(255, Math.round((rgb[0] * diff + sss + spec + rim) * edgeDarken * 255)));
        buf[idx + 1] = Math.max(0, Math.min(255, Math.round((rgb[1] * diff + sss * 0.45 + spec + rim) * edgeDarken * 255)));
        buf[idx + 2] = Math.max(0, Math.min(255, Math.round((rgb[2] * diff + sss * 0.20 + spec + rim) * edgeDarken * 255)));
        buf[idx + 3] = 255;
      }
    }

    ctx.putImageData(img, 0, 0);
    return c;
  }

  function render3DPropCanvas(propType, frame, scale) {
    if (propType === "butterfly") {
      const W = 16 * scale, H = 14 * scale;
      const c = document.createElement("canvas");
      c.width = W; c.height = H;
      const ctx = c.getContext("2d");
      const img = ctx.createImageData(W, H);
      const buf = img.data;
      const ws = frame === 1 ? 1.0 : 0.58;
      let lastBody = 999;
      function evalBf(px, py, pz) {
        const dBody = sdCapsule3D(px, py, pz, 8.0, 4.2, 0.5, 8.0, 10.5, 0.5, 0.85, 0.65);
        const dWuL = sdEllipsoid3D(px, py, pz, 8.0 - 3.6 * ws, 5.2, 0.0, 3.6 * ws, 3.0, 1.2);
        const dWuR = sdEllipsoid3D(px, py, pz, 8.0 + 3.6 * ws, 5.2, 0.0, 3.6 * ws, 3.0, 1.2);
        const dWlL = sdEllipsoid3D(px, py, pz, 8.0 - 2.6 * ws, 9.0, -0.2, 2.5 * ws, 2.3, 1.0);
        const dWlR = sdEllipsoid3D(px, py, pz, 8.0 + 2.6 * ws, 9.0, -0.2, 2.5 * ws, 2.3, 1.0);
        const dWings = Math.min(smin3D(dWuL, dWlL, 0.6), smin3D(dWuR, dWlR, 0.6));
        lastBody = dBody;
        return Math.min(dBody, dWings);
      }
      for (let y = 0; y < H; y++) {
        const py = (y + 0.5) / scale;
        for (let x = 0; x < W; x++) {
          const px = (x + 0.5) / scale;
          let pz = 5.0, hit = false;
          for (let i = 0; i < 24; i++) {
            const d = evalBf(px, py, pz);
            if (d < 0.03) { hit = true; break; }
            pz -= Math.max(0.1, d * 0.85);
            if (pz < -5.0) break;
          }
          if (!hit) continue;
          evalBf(px, py, pz);
          const dB = lastBody;
          const eps = 0.05;
          let nx = evalBf(px + eps, py, pz) - evalBf(px - eps, py, pz);
          let ny = evalBf(px, py + eps, pz) - evalBf(px, py - eps, pz);
          let nz = evalBf(px, py, pz + eps) - evalBf(px, py, pz - eps);
          const nl = Math.hypot(nx, ny, nz) + 1e-6;
          nx /= nl; ny /= nl; nz /= nl;
          let rgb;
          if (dB < 0.12) rgb = [0.18, 0.12, 0.26];
          else {
            const distC = Math.abs(px - 8.0) / Math.max(0.5, 5.5 * ws);
            rgb = mixRgb3D([1.0, 0.85, 0.35], [0.78, 0.42, 1.0], Math.min(1.0, distC));
            if (Math.abs(py - 5.0) < 1.3 && Math.abs(Math.abs(px - 8.0) - 3.4 * ws) < 1.2) rgb = mixRgb3D(rgb, [1, 1, 1], 0.75);
          }
          const ndotl = Math.max(0.0, nx * 0.28 - ny * 0.50 + nz * 0.82);
          const diff = 0.45 + 0.65 * ndotl;
          const spec = Math.pow(Math.max(0.0, nz), 16.0) * 0.32;
          const edge = 0.42 + 0.58 * smoothstep3D(0.0, 0.3, Math.max(0.0, nz));
          const idx = (y * W + x) * 4;
          buf[idx]     = Math.max(0, Math.min(255, Math.round((rgb[0] * diff + spec) * edge * 255)));
          buf[idx + 1] = Math.max(0, Math.min(255, Math.round((rgb[1] * diff + spec) * edge * 255)));
          buf[idx + 2] = Math.max(0, Math.min(255, Math.round((rgb[2] * diff + spec) * edge * 255)));
          buf[idx + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      return c;
    } else {
      const W = 14 * scale, H = 14 * scale;
      const c = document.createElement("canvas");
      c.width = W; c.height = H;
      const ctx = c.getContext("2d");
      const img = ctx.createImageData(W, H);
      const buf = img.data;
      const rot = frame === 1 ? 0.0 : 0.85;
      let lx = 0.32, ly = -0.54, lz = 0.78;
      const lLen = Math.hypot(lx, ly, lz);
      lx /= lLen; ly /= lLen; lz /= lLen;
      let hx = lx, hy = ly, hz = lz + 1.0;
      const hLen = Math.hypot(hx, hy, hz);
      hx /= hLen; hy /= hLen; hz /= hLen;
      for (let y = 0; y < H; y++) {
        const py = (y + 0.5) / scale;
        for (let x = 0; x < W; x++) {
          const px = (x + 0.5) / scale;
          const dx = (px - 7.0) / 5.4, dy = (py - 7.0) / 5.4;
          const r2 = dx * dx + dy * dy;
          if (r2 > 1.0) continue;
          const dz = Math.sqrt(1.0 - r2);
          const ang = Math.atan2(dy, dx) + rot + dz * 0.35;
          const stripe = Math.sin(ang * 3.0);
          let rgb;
          if (dx * dx + (dy + 0.15) ** 2 < 0.08) rgb = [1.0, 0.98, 0.92];
          else if (stripe > 0.25) rgb = [1.0, 0.30, 0.43];
          else if (stripe < -0.25) rgb = [0.25, 0.78, 1.0];
          else rgb = [1.0, 0.84, 0.36];
          const ndotl = dx * lx + dy * ly + dz * lz;
          const ndoth = Math.max(0.0, dx * hx + dy * hy + dz * hz);
          const wrap = ndotl * 0.5 + 0.5;
          const diff = 0.38 + 0.72 * (wrap * wrap);
          const spec = Math.pow(ndoth, 28.0) * 0.62;
          const edge = 0.38 + 0.62 * smoothstep3D(0.0, 0.28, dz);
          const idx = (y * W + x) * 4;
          buf[idx]     = Math.max(0, Math.min(255, Math.round((rgb[0] * diff + spec) * edge * 255)));
          buf[idx + 1] = Math.max(0, Math.min(255, Math.round((rgb[1] * diff + spec) * edge * 255)));
          buf[idx + 2] = Math.max(0, Math.min(255, Math.round((rgb[2] * diff + spec) * edge * 255)));
          buf[idx + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      return c;
    }
  }

  function draw3DCharacter(ctx, spId, poseName, flipX, customScale = SCALE) {
    const key = `${spId}:${poseName}:${customScale}`;
    let baseCanvas = CACHE_3D.get(key);
    if (!baseCanvas) {
      baseCanvas = render3DPoseCanvas(spId, poseName, customScale);
      CACHE_3D.set(key, baseCanvas);
    }
    const W = 48 * customScale, H = 36 * customScale;
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    if (flipX) {
      ctx.translate(W, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(baseCanvas, 0, 0);
    ctx.restore();
  }

  function draw3DProp(ctx, propType, frame, customScale = SCALE) {
    const key = `prop:${propType}:${frame}:${customScale}`;
    let baseCanvas = CACHE_3D.get(key);
    if (!baseCanvas) {
      baseCanvas = render3DPropCanvas(propType, frame, customScale);
      CACHE_3D.set(key, baseCanvas);
    }
    ctx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
    ctx.drawImage(baseCanvas, 0, 0);
  }

  function createCompanionElement(id, w, h, borderColor, textColor, hasBubble) {
    const el = document.createElement("div");
    el.id = id;
    Object.assign(el.style, {
      position: "fixed",
      left: "120px",
      top: (window.innerHeight - 92) + "px",
      width: w + "px",
      height: h + "px",
      zIndex: "9999",
      cursor: "grab",
      userSelect: "none",
      touchAction: "none",
      filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.45))"
    });

    let b = null;
    if (hasBubble) {
      b = document.createElement("div");
      Object.assign(b.style, {
        position: "absolute",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%) translateY(-4px)",
        background: "rgba(26, 20, 35, 0.92)",
        color: textColor,
        border: "1px solid " + borderColor,
        borderRadius: "8px",
        padding: "2px 7px",
        fontFamily: "monospace",
        fontSize: "11px",
        fontWeight: "700",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        opacity: "0",
        transition: "opacity 0.2s ease"
      });
      el.appendChild(b);
    }

    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    c.style.imageRendering = "pixelated";
    el.appendChild(c);

    return { container: el, bubble: b, canvas: c, ctx: c.getContext("2d") };
  }

  const fox = createCompanionElement("foxden-pixel-fox", WIDTH, HEIGHT, "rgba(255, 146, 51, 0.45)", "#ff9e44", true);
  const bear = createCompanionElement("foxden-pixel-bear", WIDTH, HEIGHT, "rgba(201, 141, 99, 0.6)", "#ffd07b", true);
  const butterfly = createCompanionElement("foxden-pixel-butterfly", 16 * SCALE, 14 * SCALE, "", "", false);
  const ball = createCompanionElement("foxden-pixel-ball", 14 * SCALE, 14 * SCALE, "", "", false);

  [bear, butterfly, ball].forEach((obj) => {
    obj.container.style.display = "none";
    obj.container.style.pointerEvents = "none";
  });

  function drawGrid(ctx, palette, grid, flipX, scale = SCALE) {
    const h = grid.length;
    const w = grid[0].length;
    ctx.clearRect(0, 0, w * scale, h * scale);
    for (let r = 0; r < h; r++) {
      const row = grid[r];
      for (let c = 0; c < w; c++) {
        const ch = row[c];
        const color = palette[ch];
        if (!color) continue;
        const drawC = flipX ? (w - 1 - c) : c;
        ctx.fillStyle = color;
        ctx.fillRect(drawC * scale, r * scale, scale, scale);
      }
    }
  }

  // Build Floating Companion Selector Pill UI
  const selectorWrap = document.createElement("div");
  selectorWrap.id = "foxden-companion-selector";
  Object.assign(selectorWrap.style, {
    position: "fixed",
    bottom: "14px",
    left: "14px",
    zIndex: "10000",
    fontFamily: "'JetBrainsMono Nerd Font', monospace",
    userSelect: "none"
  });

  const selectorMenu = document.createElement("div");
  Object.assign(selectorMenu.style, {
    display: "none",
    flexDirection: "column",
    gap: "4px",
    marginBottom: "8px",
    padding: "8px",
    background: "rgba(22, 17, 34, 0.96)",
    border: "1.5px solid rgba(255, 158, 68, 0.55)",
    borderRadius: "12px",
    boxShadow: "0 10px 26px rgba(0,0,0,0.55)",
    backdropFilter: "blur(8px)"
  });

  const selectorBtn = document.createElement("button");
  Object.assign(selectorBtn.style, {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    background: "rgba(24, 19, 36, 0.9)",
    color: "#f5edff",
    border: "1.5px solid rgba(255, 158, 68, 0.5)",
    borderRadius: "999px",
    padding: "6px 12px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
  });

  const styleToggleRow = document.createElement("div");
  Object.assign(styleToggleRow.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
    padding: "6px 10px",
    marginBottom: "4px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 208, 123, 0.35)",
    background: "rgba(255, 158, 68, 0.14)",
    cursor: "pointer",
    color: "#ffd07b",
    fontSize: "12px",
    fontWeight: "700"
  });
  function updateStyleToggleLabel() {
    styleToggleRow.innerHTML = `<span>${use3D ? "✨ Style: 3D Plushie" : "👾 Style: 16-Bit Pixel"}</span><span style="opacity:0.75;font-size:10px;">Tap</span>`;
  }
  updateStyleToggleLabel();

  const miniCanvases = [];

  function refreshMiniPreviews() {
    miniCanvases.forEach(({ canvas, sp }) => {
      const mctx = canvas.getContext("2d");
      if (use3D) {
        draw3DCharacter(mctx, sp.id, "sit1", false, 1);
      } else {
        drawGrid(mctx, PALETTES[sp.id], GEOMS[sp.geom].sit1, false, 1);
      }
    });
  }

  styleToggleRow.addEventListener("click", () => {
    use3D = !use3D;
    localStorage.setItem("companion_3d", use3D ? "true" : "false");
    updateStyleToggleLabel();
    refreshMiniPreviews();
    showBubble(use3D ? "✨ 3D Plushie Mode!" : "👾 16-Bit Pixel Mode!");
  });
  selectorMenu.appendChild(styleToggleRow);

  function updateSelectorLabel() {
    const m = getMeta();
    selectorBtn.innerHTML = `<span>${m.icon}</span><span>${m.name}</span><span style="opacity:0.65;font-size:10px;">▴</span>`;
    fox.bubble.style.color = m.bubbleColor;
    fox.bubble.style.borderColor = m.bubbleColor;
    Array.from(selectorMenu.children).forEach((row) => {
      if (!row.dataset.species) return;
      const active = row.dataset.species === currentSpecies;
      row.style.background = active ? "rgba(255, 158, 68, 0.22)" : "transparent";
      row.style.borderColor = active ? m.bubbleColor : "transparent";
    });
  }

  SPECIES_META.forEach((sp) => {
    const item = document.createElement("div");
    item.dataset.species = sp.id;
    Object.assign(item.style, {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "4px 8px",
      borderRadius: "8px",
      border: "1px solid transparent",
      cursor: "pointer",
      color: "#f3ecff",
      fontSize: "12px",
      fontWeight: "600"
    });
    const miniCanvas = document.createElement("canvas");
    miniCanvas.width = 48;
    miniCanvas.height = 36;
    miniCanvas.style.imageRendering = "pixelated";
    miniCanvases.push({ canvas: miniCanvas, sp });
    const lbl = document.createElement("span");
    lbl.textContent = `${sp.icon} ${sp.name}`;
    item.appendChild(miniCanvas);
    item.appendChild(lbl);
    item.addEventListener("click", () => {
      currentSpecies = sp.id;
      localStorage.setItem("companion_species", currentSpecies);
      updateSelectorLabel();
      selectorMenu.style.display = "none";
      showBubble(`${sp.icon} ${sp.name}!`);
    });
    selectorMenu.appendChild(item);
  });
  refreshMiniPreviews();

  selectorBtn.addEventListener("click", () => {
    selectorMenu.style.display = selectorMenu.style.display === "none" ? "flex" : "none";
  });

  selectorWrap.appendChild(selectorMenu);
  selectorWrap.appendChild(selectorBtn);
  updateSelectorLabel();

  function mount() {
    [butterfly, ball, bear, fox].forEach((obj) => {
      if (!document.getElementById(obj.container.id)) {
        document.body.appendChild(obj.container);
      }
    });
    if (!document.getElementById(selectorWrap.id)) {
      document.body.appendChild(selectorWrap);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
  document.addEventListener("turbo:load", mount);

  let x = 140;
  let y = Math.max(120, window.innerHeight - 96);
  let targetX = Math.min(window.innerWidth - 120, 460);
  let targetY = y;
  let facingRight = true;
  let mode = "walk";
  let modeTimer = 150;
  let frameTick = 0;
  let clickCycle = 0;
  let jumpY = 0;
  let jumpVy = 0;
  let dragging = false;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let foxBubbleTimeout = null;

  let bfX = 300, bfY = 300, bfBaseY = 300, bfVx = 2.0, bfPhase = 0;
  let ballX = 300, ballY = 300, ballVx = 4.0, ballVy = 0, ballFloorY = 400, ballBoopsLeft = 4;
  let bearState = "hidden", bearX = -WIDTH - 20, bearY = y, bearFacingRight = true, bearTimer = 18 * 60, bearExitX = -WIDTH - 20, bearBubbleTimeout = null;

  function showBubble(text, ms = 1400) {
    fox.bubble.textContent = text;
    fox.bubble.style.opacity = "1";
    if (foxBubbleTimeout) clearTimeout(foxBubbleTimeout);
    foxBubbleTimeout = setTimeout(() => {
      fox.bubble.style.opacity = "0";
    }, ms);
  }

  function showBearBubble(text, ms = 1800) {
    bear.bubble.textContent = text;
    bear.bubble.style.opacity = "1";
    if (bearBubbleTimeout) clearTimeout(bearBubbleTimeout);
    bearBubbleTimeout = setTimeout(() => {
      bear.bubble.style.opacity = "0";
    }, ms);
  }

  function startDance() {
    butterfly.container.style.display = "none";
    ball.container.style.display = "none";
    mode = "dance";
    modeTimer = 240;
    showBubble("♪ ♫ *boogie* ♫ ♪", 1800);
  }

  function startButterflyChase() {
    ball.container.style.display = "none";
    butterfly.container.style.display = "block";
    mode = "butterfly";
    modeTimer = 320;
    const goRight = x < window.innerWidth * 0.5;
    bfX = Math.max(60, Math.min(window.innerWidth - 80, x + (goRight ? 130 : -130)));
    bfBaseY = Math.max(90, y - 34);
    bfY = bfBaseY;
    bfVx = goRight ? 1.8 : -1.8;
    bfPhase = 0;
    showBubble("🦋 Oooh!", 1600);
  }

  function startBallPlay() {
    butterfly.container.style.display = "none";
    ball.container.style.display = "block";
    mode = "ball";
    modeTimer = 340;
    const dir = x < window.innerWidth * 0.5 ? 1 : -1;
    ballX = x + dir * 70;
    ballFloorY = Math.min(Math.max(150, window.innerHeight - 48), y + 42);
    ballY = y - 48;
    ballVx = dir * 3.2;
    ballVy = -3.5;
    ballBoopsLeft = 4;
    showBubble("⚽ Playtime!", 1600);
  }

  function pickNextActivity() {
    const r = Math.random();
    if (r < 0.24) startButterflyChase();
    else if (r < 0.48) startBallPlay();
    else if (r < 0.68) startDance();
    else if (r < 0.84) {
      mode = "sit";
      modeTimer = 140 + Math.random() * 100;
    } else {
      mode = "sleep";
      modeTimer = 260;
      showBubble("Zzz...", 2000);
    }
  }

  function startBearVisit() {
    if (bearState !== "hidden") return;
    const fromLeft = x > window.innerWidth * 0.5;
    bearX = fromLeft ? -WIDTH - 10 : window.innerWidth + 10;
    bearExitX = fromLeft ? -WIDTH - 20 : window.innerWidth + 20;
    bearY = y;
    bearFacingRight = fromLeft;
    bearState = "enter";
    bearTimer = 500;
    bear.container.style.display = "block";
  }

  function pickNewDestination() {
    const maxW = Math.max(120, window.innerWidth - WIDTH - 20);
    const maxH = Math.max(120, window.innerHeight - HEIGHT - 16);
    targetX = 20 + Math.random() * (maxW - 20);
    targetY = Math.random() < 0.45 ? maxH : 60 + Math.random() * (maxH - 60);
  }

  fox.container.addEventListener("pointerdown", (e) => {
    dragging = true;
    fox.container.style.cursor = "grabbing";
    dragOffsetX = e.clientX - x;
    dragOffsetY = e.clientY - y;
    fox.container.setPointerCapture(e.pointerId);
  });

  fox.container.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const newX = e.clientX - dragOffsetX;
    const newY = e.clientY - dragOffsetY;
    if (Math.abs(newX - x) > 1) facingRight = newX > x;
    x = newX;
    y = newY;
  });

  fox.container.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    fox.container.style.cursor = "grab";
    clickCycle = (clickCycle + 1) % 4;
    if (clickCycle === 1) startButterflyChase();
    else if (clickCycle === 2) startBallPlay();
    else if (clickCycle === 3) startDance();
    else {
      butterfly.container.style.display = "none";
      ball.container.style.display = "none";
      mode = "jump";
      jumpVy = -8.5;
      modeTimer = 140;
      pickNewDestination();
      showBubble(currentSpecies === "chillet" ? "❄️ *noodle boing!*" : (currentSpecies.includes("cat") ? "🐾 *pounce!*" : "★ Boing!"));
    }
  });

  fox.container.addEventListener("dblclick", () => {
    butterfly.container.style.display = "none";
    ball.container.style.display = "none";
    mode = "sleep";
    modeTimer = 360;
    showBubble("Zzz...", 2400);
  });

  function stepBear() {
    if (bearState === "hidden") {
      bearTimer--;
      if (bearTimer <= 0) startBearVisit();
      return;
    }
    const spacing = 76;
    const desiredX = bearX < x ? Math.max(12, x - spacing) : Math.min(window.innerWidth - WIDTH - 12, x + spacing);
    const desiredY = y;

    if (bearState === "enter") {
      const dx = desiredX - bearX;
      const dy = desiredY - bearY;
      const dist = Math.hypot(dx, dy);
      if (dist <= 6) {
        bearState = "greet";
        bearTimer = 280;
        bearFacingRight = x > bearX;
        const bearGreets = ["👋 Hewwo friend!", "🍯 Brought honey!", "♥ Hiya buddy!", "✨ Rawr! Hi!"];
        showBearBubble(bearGreets[Math.floor(Math.random() * bearGreets.length)], 2200);
        facingRight = bearX > x;
        if (mode !== "sleep") {
          if (Math.random() < 0.45) startDance();
          else {
            mode = "sit";
            modeTimer = Math.max(modeTimer, 200);
            jumpVy = -5.0;
          }
        }
        setTimeout(() => {
          const replies = mode === "sleep"
            ? ["💤 *sleepy wag*", "♥ zZz... hi Bear!"]
            : ["♥ Hi Bear!", "★ Yay!", "♪ Let's dance!", "🍯 Yum!"];
          showBubble(replies[Math.floor(Math.random() * replies.length)], 2000);
        }, 700);
      } else {
        bearX += (dx / dist) * 1.6;
        bearY += (dy / dist) * 1.2;
        bearFacingRight = dx > 0;
      }
    } else if (bearState === "greet") {
      bearFacingRight = x > bearX;
      if (mode === "sit") facingRight = bearX > x;
      bearTimer--;
      if (bearTimer <= 0) {
        bearState = "leave";
        const byes = ["👋 Bye-bye!", "🐾 See ya soon!", "🍯 Off I trot!"];
        showBearBubble(byes[Math.floor(Math.random() * byes.length)], 1800);
      }
    } else if (bearState === "leave") {
      const dx = bearExitX - bearX;
      if (Math.abs(dx) <= 8) {
        bearState = "hidden";
        bear.container.style.display = "none";
        bearTimer = (40 + Math.floor(Math.random() * 35)) * 60;
        return;
      }
      bearX += Math.sign(dx) * 1.55;
      bearFacingRight = dx > 0;
    }

    let bSprite = BEAR_WALK_1;
    let bPoseName = "walk1";
    if (bearState === "greet") {
      const w1 = Math.floor(frameTick / 16) % 2 === 0;
      bSprite = w1 ? BEAR_WAVE_1 : BEAR_WAVE_2;
      bPoseName = w1 ? "bearWave1" : "bearWave2";
    } else {
      const c = Math.floor(frameTick / 7) % 4;
      bSprite = [BEAR_WALK_1, BEAR_WALK_2, BEAR_WALK_3, BEAR_WALK_2][c];
      bPoseName = ["walk1", "walk2", "walk3", "walk2"][c];
    }
    if (use3D) {
      draw3DCharacter(bear.ctx, "bear", bPoseName, !bearFacingRight);
    } else {
      drawGrid(bear.ctx, BEAR_PALETTE, bSprite, !bearFacingRight);
    }
    bear.container.style.left = Math.round(bearX) + "px";
    bear.container.style.top = Math.round(bearY) + "px";
  }

  function step() {
    frameTick++;

    if (!dragging) {
      modeTimer--;

      if (jumpY < 0 || jumpVy < 0) {
        jumpY += jumpVy;
        jumpVy += 0.85;
        if (jumpY >= 0) {
          jumpY = 0;
          jumpVy = 0;
          if (mode === "jump") mode = "walk";
        }
      }

      if (bearState === "greet" && mode !== "sleep" && mode !== "dance") {
        mode = "sit";
        facingRight = bearX > x;
      } else if (mode === "butterfly") {
        bfPhase++;
        bfX += bfVx;
        if (bfX < 40 || bfX > window.innerWidth - 70) bfVx = -bfVx;
        if (modeTimer < 60) bfBaseY -= 2.0;
        bfY = bfBaseY + Math.sin(bfPhase * 0.14) * 18;

        const bfx = (bfX - 30) - x;
        const bfy = Math.min(window.innerHeight - 90, bfBaseY + 34) - y;
        const bfDist = Math.hypot(bfx, bfy);
        if (bfDist > 6) {
          x += (bfx / bfDist) * 2.1;
          y += (bfy / bfDist) * 1.3;
          if (Math.abs(bfx) > 0.2) facingRight = bfx > 0;
        }
        if (bfDist < 34 && jumpY === 0 && modeTimer > 60 && frameTick % 36 === 0) {
          jumpVy = -7.8;
          const bfQuips = ["🦋 Boop!", "✨ Flutter!", "★ Almost!", "♥ Wheee!"];
          showBubble(bfQuips[Math.floor(Math.random() * bfQuips.length)]);
        }

        const bfFrame = Math.floor(frameTick / 5) % 2 === 0 ? 1 : 2;
        if (use3D) {
          draw3DProp(butterfly.ctx, "butterfly", bfFrame);
        } else {
          drawGrid(butterfly.ctx, PALETTES.fox, bfFrame === 1 ? BUTTERFLY_1 : BUTTERFLY_2, false);
        }
        butterfly.container.style.left = Math.round(bfX) + "px";
        butterfly.container.style.top = Math.round(bfY) + "px";

        if (modeTimer <= 0 || bfY < -40) {
          butterfly.container.style.display = "none";
          mode = "sit";
          modeTimer = 120;
        }
      } else if (mode === "ball") {
        ballX += ballVx;
        ballY += ballVy;
        ballVy += 0.55;
        if (ballY >= ballFloorY) {
          ballY = ballFloorY;
          ballVy = -Math.abs(ballVy) * 0.74;
          ballVx *= 0.94;
          if (Math.abs(ballVy) < 1.2) ballVy = 0;
        }
        if (ballX < 24) {
          ballX = 24;
          ballVx = Math.abs(ballVx);
        } else if (ballX > window.innerWidth - 54) {
          ballX = window.innerWidth - 54;
          ballVx = -Math.abs(ballVx);
        }

        const bx = (ballX - 34) - x;
        const by = (ballFloorY - 42) - y;
        const bDist = Math.hypot(bx, by);
        if (bDist > 6) {
          x += (bx / bDist) * 2.3;
          y += (by / bDist) * 1.4;
          if (Math.abs(bx) > 0.2) facingRight = bx > 0;
        }

        const noseX = facingRight ? x + 76 : x + 12;
        const noseY = y + 34;
        const hitDist = Math.hypot((ballX + 14) - noseX, (ballY + 14) - noseY);
        if (hitDist < 34 && ballBoopsLeft > 0) {
          ballBoopsLeft--;
          const kickDir = x < window.innerWidth * 0.25 ? 1 : (x > window.innerWidth * 0.75 ? -1 : (facingRight ? 1 : -1));
          ballVx = kickDir * (3.6 + Math.random() * 2.2);
          ballVy = -7.5 - Math.random() * 2.2;
          jumpVy = -5.0;
          const ballQuips = ["⚽ Boop!", "★ Dribble!", "♥ Goal!", "⚡ Bounce!"];
          showBubble(ballQuips[Math.floor(Math.random() * ballQuips.length)]);
        }

        const bFrame = Math.floor(frameTick / 6) % 2 === 0 ? 1 : 2;
        if (use3D) {
          draw3DProp(ball.ctx, "ball", bFrame);
        } else {
          drawGrid(ball.ctx, PALETTES.fox, bFrame === 1 ? BALL_1 : BALL_2, false);
        }
        ball.container.style.left = Math.round(ballX) + "px";
        ball.container.style.top = Math.round(ballY) + "px";

        if (modeTimer <= 0 || (ballBoopsLeft <= 0 && Math.abs(ballVx) < 0.6)) {
          ball.container.style.display = "none";
          mode = "sit";
          modeTimer = 120;
        }
      } else if (mode === "dance") {
        if (frameTick % 14 === 0 && jumpY === 0) jumpVy = -3.8;
        if (frameTick % 28 === 0) facingRight = !facingRight;
        if (frameTick % 65 === 0) {
          const notes = ["♪ ♫ *boogie* ♫ ♪", "💃 Happy dance!", "★ Groove! ♪", "♫ Cha-cha! ♪"];
          showBubble(notes[Math.floor(Math.random() * notes.length)]);
        }
        if (modeTimer <= 0) {
          mode = "walk";
          modeTimer = 180;
          pickNewDestination();
        }
      } else if (mode === "walk" || mode === "jump") {
        const dx = targetX - x;
        const dy = targetY - y;
        const dist = Math.hypot(dx, dy);

        if (dist < 6 || modeTimer <= 0) {
          pickNextActivity();
        } else {
          const speed = mode === "jump" ? 3.4 : 1.45;
          const vx = (dx / dist) * speed;
          const vy = (dy / dist) * (speed * 0.65);
          x += vx;
          y += vy;
          if (Math.abs(vx) > 0.1) facingRight = vx > 0;
        }
      } else if (mode === "sit") {
        if (modeTimer <= 0) {
          pickNextActivity();
        }
      } else if (mode === "sleep") {
        if (frameTick % 120 === 0) showBubble("zZz...", 1500);
        if (modeTimer <= 0) {
          mode = "walk";
          modeTimer = 200;
          pickNewDestination();
        }
      }
    }

    const meta = getMeta();
    const geom = GEOMS[meta.geom];
    const pal = PALETTES[currentSpecies];

    let sprite = geom.sit1;
    let poseName = "sit1";
    if (dragging || (jumpY < -1 && mode !== "dance")) {
      sprite = geom.jump1;
      poseName = "jump1";
    } else if (mode === "dance") {
      const d1 = Math.floor(frameTick / 9) % 2 === 0;
      sprite = d1 ? geom.dance1 : geom.dance2;
      poseName = d1 ? "dance1" : "dance2";
    } else if (mode === "walk" || mode === "butterfly" || mode === "ball") {
      const cycle = Math.floor(frameTick / 7) % 4;
      sprite = [geom.walk1, geom.walk2, geom.walk3, geom.walk2][cycle];
      poseName = ["walk1", "walk2", "walk3", "walk2"][cycle];
    } else if (mode === "sit") {
      const wag = Math.floor(frameTick / 22) % 2 === 0;
      sprite = wag ? geom.sit1 : geom.sit2;
      poseName = wag ? "sit1" : "sit2";
    } else if (mode === "sleep") {
      const breathe = Math.floor(frameTick / 55) % 2 === 0;
      sprite = breathe ? geom.sleep1 : geom.sleep2;
      poseName = breathe ? "sleep1" : "sleep2";
    }

    if (use3D) {
      draw3DCharacter(fox.ctx, currentSpecies, poseName, !facingRight);
    } else {
      drawGrid(fox.ctx, pal, sprite, !facingRight);
    }
    fox.container.style.left = Math.round(x) + "px";
    fox.container.style.top = Math.round(y + jumpY) + "px";

    stepBear();

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
})();

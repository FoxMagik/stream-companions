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

  function getMeta(sp = currentSpecies) {
    return SPECIES_META.find((m) => m.id === sp) || SPECIES_META[0];
  }

  const SPRITE_W = 48;
  const SPRITE_H = 36;
  const SCALE = 2;
  const WIDTH = SPRITE_W * SCALE;
  const HEIGHT = SPRITE_H * SCALE;

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

  function updateSelectorLabel() {
    const m = getMeta();
    selectorBtn.innerHTML = `<span>${m.icon}</span><span>${m.name}</span><span style="opacity:0.65;font-size:10px;">▴</span>`;
    fox.bubble.style.color = m.bubbleColor;
    fox.bubble.style.borderColor = m.bubbleColor;
    Array.from(selectorMenu.children).forEach((row) => {
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
    drawGrid(miniCanvas.getContext("2d"), PALETTES[sp.id], GEOMS[sp.geom].sit1, false, 1);
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
    if (bearState === "greet") {
      bSprite = Math.floor(frameTick / 16) % 2 === 0 ? BEAR_WAVE_1 : BEAR_WAVE_2;
    } else {
      const c = Math.floor(frameTick / 7) % 4;
      bSprite = [BEAR_WALK_1, BEAR_WALK_2, BEAR_WALK_3, BEAR_WALK_2][c];
    }
    drawGrid(bear.ctx, BEAR_PALETTE, bSprite, !bearFacingRight);
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

        const bfSprite = Math.floor(frameTick / 5) % 2 === 0 ? BUTTERFLY_1 : BUTTERFLY_2;
        drawGrid(butterfly.ctx, PALETTES.fox, bfSprite, false);
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

        const bSprite = Math.floor(frameTick / 6) % 2 === 0 ? BALL_1 : BALL_2;
        drawGrid(ball.ctx, PALETTES.fox, bSprite, false);
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
    if (dragging || (jumpY < -1 && mode !== "dance")) {
      sprite = geom.jump1;
    } else if (mode === "dance") {
      sprite = Math.floor(frameTick / 9) % 2 === 0 ? geom.dance1 : geom.dance2;
    } else if (mode === "walk" || mode === "butterfly" || mode === "ball") {
      const cycle = Math.floor(frameTick / 7) % 4;
      sprite = [geom.walk1, geom.walk2, geom.walk3, geom.walk2][cycle];
    } else if (mode === "sit") {
      const wag = Math.floor(frameTick / 22) % 2 === 0;
      sprite = wag ? geom.sit1 : geom.sit2;
    } else if (mode === "sleep") {
      const breathe = Math.floor(frameTick / 55) % 2 === 0;
      sprite = breathe ? geom.sleep1 : geom.sleep2;
    }

    drawGrid(fox.ctx, pal, sprite, !facingRight);
    fox.container.style.left = Math.round(x) + "px";
    fox.container.style.top = Math.round(y + jumpY) + "px";

    stepBear();

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
})();

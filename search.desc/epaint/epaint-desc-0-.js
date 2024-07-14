searchState.loadedDescShard("epaint", 0, "A simple 2D graphics library for turning simple 2D shapes …\nBackend-specific painting.\nCircle with optional outline and fill.\nHow to paint a circle.\nA <code>Mesh</code> or <code>PaintCallback</code> within a clip rectangle.\nA <code>Shape</code> within a clip rectangle.\nThis format is used for space-efficient color …\nA cubic Bézier Curve.\nA cubic Bézier Curve.\n+Y\nInfinite rectangle that contains every point.\nEllipse with optional outline and fill.\nHow to paint an ellipse.\nWas epaint compiled with the <code>rayon</code> feature?\nHue, saturation, value, alpha. All in the range [0, 1]. No …\nLike Hsva but with the <code>v</code> value (brightness) being gamma …\n-X\nA line between two points.\nTextures allocated using <code>TextureManager</code>.\nA value for all four sides of a rectangle, often used to …\nTextured triangles in two dimensions.\nA general triangle mesh.\nA version of <code>Mesh</code> that uses 16-bit indices.\nAn invalid <code>Rect</code> filled with <code>f32::NAN</code>.\nNo shadow at all.\nSame as <code>Stroke::default</code>.\nSame as <code>PathStroke::default</code>.\nThe inverse of <code>Self::EVERYTHING</code>: stretches from positive …\nPaint nothing. This can be useful as a placeholder.\nAn ugly color that is planned to be replaced before making …\nIf you want to paint some 3D shapes inside an egui region, …\nInformation passed along with <code>PaintCallback</code> (…\nA series of lines between points. The path can have a …\nA path which can be stroked and/or filled (if closed).\nDescribes the width and color of paths. The color can …\nA position on screen.\nA rendering primitive - either a <code>Mesh</code> or a <code>PaintCallback</code>.\nA quadratic Bézier Curve.\nA quadratic Bézier Curve.\n+X\nA rectangular region of space.\nRectangle with optional outline and fill.\nHow to paint a rectangle.\n0-1 linear space <code>RGBA</code> color with premultiplied alpha.\nHow rounded the corners of things should be\nThe color and fuzziness of a fuzzy shape.\nA paint primitive such as a circle or a piece of text. …\nDescribes the width and color of a line.\nText.\nHow to paint some text on screen.\nContains font data in an atlas, where each character …\nUsed to paint images.\nWhat texture to use in a <code>Mesh</code> mesh.\n-Y\nYour own texture, defined in any which way you want. The …\nRecursively nest more shapes - sometimes a convenience to …\nA vector has a direction and length. A <code>Vec2</code> is often used …\nThe 2D vertex type.\nThe UV coordinate of a white region of the texture mesh. …\nRight\nDown\nThe zero position, the origin. The top left corner in a …\nA <code>Rect</code> filled with zeroes.\nNo rounding on any corner.\nalpha 0-1. A negative value signifies an additive color …\nalpha 0-1. A negative value signifies an additive color …\nUniformly colored rectangle.\nRectangle with a texture and color.\nAdd a triangle.\nReturns an additive version of self\nReturn an additive version of this color (alpha = 0)\nReturns the coordinates of where the rect ended up, and …\nMeasures the angle of the vector.\nRotate text by this many radians clockwise. The pivot is …\nCreate a unit vector with the given CW angle (in radians).\nTrue if any member is NaN.\nTrue if any member is NaN.\nTrue if any member is NaN.\nAppend all the indices and vertices of <code>other</code> to <code>self</code>.\nAppend all the indices and vertices of <code>other</code> to <code>self</code> …\nThe argument is the rectangle of the shadow caster.\nWidth / height\nwidth / height\nMake sure each corner has a rounding of at least this.\nMake sure each corner has a rounding of at most this.\nThe width of the blur, i.e. the width of the fuzzy …\nIf larger than zero, the edges of the rectangle (for both …\n<code>max.y</code>\n<code>max.y</code>\n<code>width x height x bytes_per_pixel</code>\nCalculate a bounding rectangle.\nPaint something custom (e.g. 3D stuff).\nReturn the given points clamped to be inside the rectangle …\nRestore to default state, but without freeing memory.\nClip rectangle in points.\nClip / scissor rectangle. Only show the part of the <code>Shape</code> …\nClip / scissor rectangle. Only show the part of the <code>Mesh</code> …\nThe “scissor” or “clip” rectangle. This is what …\nIf true, connect the first and last of the points together.\nA line that closes back to the start point again.\nA line that closes back to the start point again.\nsRGBA with premultiplied alpha\nColor of the opaque center of the shadow.\nA convex polygon with a fill and optional stroke.\nA convex polygon with a fill and optional stroke.\nTurn a line into dashes.\nTurn a line into dashes. If you need to create many dashed …\nTurn a line into dashes with different dash/gap lengths …\nTurn a line into dashes with different dash/gap lengths …\nThe epaint font texture.\nThe distance from the rect to the position, squared.\nThe distance from the rect to the position.\nThe dot-product of two vectors.\nTurn a line into equally spaced dots.\nA <code>Rect</code> that contains every point above a certain y …\nA <code>Rect</code> that contains every point below a certain y …\nA <code>Rect</code> that contains every point to the left of the given …\nA <code>Rect</code> that contains every point to the right of the given …\nExpand by this much in each direction, keeping the center\nExpand by this much in each direction, keeping the center\nExpand to include the given x coordinate\nExpand to include the given y coordinate\nAny <code>Color32::PLACEHOLDER</code> in the galley will be replaced by …\nFill is only supported for convex polygons.\nHow to fill the rectangle.\nWhen this get high, it might be time to clear and start …\nIf the rect should be filled with a texture, which one?\nFind out the t value for the point where the curve is …\nfind a set of points that approximate the cubic Bézier …\nfind a set of points that approximate the quadratic …\nfind a set of points that approximate the cubic Bézier …\nIterates through the curve invoking a callback at each …\nCompute a flattened approximation of the curve, invoking a …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTransparent black\nParses a color from a hex string.\nleft-top corner plus a size (stretching right-down).\nBounding-box around the points.\nCreates a cubic Bézier curve based on 4 points and stroke.\nCreate a new quadratic Bézier shape based on the 3 points …\nA zero-sized rect at a specific point.\nFrom <code>sRGBA</code> with premultiplied alpha.\nFrom linear RGBA with premultiplied alpha\nFrom <code>sRGBA</code> WITHOUT premultiplied alpha.\nFrom linear RGBA without premultiplied alpha\nFrom <code>sRGBA</code> with premultiplied alpha\nFrom <code>sRGBA</code> without premultiplied alpha\nReturns the bounding rectangle of the two points.\nTransparent white\nAny uncolored parts of the <code>Galley</code> (using …\nThe laid out text, from <code>Fonts::layout_job</code>.\nAll text color in the <code>Galley</code> will be replaced with the …\nMultiply with 0.5 to make color half as opaque, …\nhue 0-1\nhue 0-1\nA horizontal line.\nAn image at the given position.\nThe full font atlas image.\nDraw as triangles (i.e. the length is always multiple of …\nDraw as triangles (i.e. the length is always multiple of …\nHow perceptually intense (bright) is the color?\nThe intersection of two <code>Rect</code>, i.e. the area covered by …\nDoes this Rect intersect the given ray (where <code>d</code> is …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs the alpha=0 ?\nIs the alpha=0 ?\nTrue if width is zero or color is transparent\nTrue if width is zero or color is solid and transparent\nTrue if all members are also finite.\nTrue if all members are also finite.\nTrue if all members are also finite.\n<code>width &lt; 0 || height &lt; 0</code>\n<code>width &gt; 0 &amp;&amp; height &gt; 0</code>\nAre the margin on every side the same?\nDo all corners have the same rounding?\nAre all indices within the bounds of the contained …\nAre all indices within the bounds of the contained …\n<code>min.x</code>\n<code>min.x</code>\nLinearly interpolate towards another point, so that …\nLinearly interpolate so that <code>[0, 0]</code> is <code>Self::min</code> and <code>[1, 1]</code>…\nLerp this color towards <code>other</code> by <code>t</code> in gamma space.\nLinearly self towards other rect.\nA line through many points.\nA line through many points.\nA line between two points. More efficient than calling …\nMultiply with 0.5 to make color half as opaque in linear …\nLogical bounding rectangle (ignoring stroke width)\nLogical bounding rectangle (ignoring stroke width)\nHow much larger than the parent rect are we in each …\nThe other corner, opposing <code>Self::min</code>. Usually the right …\nReturns the maximum of <code>self.x</code> and <code>self.y</code>.\nOne of the corners of the rectangle, usually the left top …\nReturns the minimum of <code>self.x</code> and <code>self.y</code>.\nMultiply with e.g. 0.5 to make us half transparent\nHelper module that adds extra checks when the …\nDebug-name.\nRadius of the rounding of the North-East (right top) …\nIf you are using egui, use <code>egui::Context::load_texture</code> …\nThe given fallback color will be used for any uncolored …\nCreate a new <code>PathStroke</code> with a UV function\nSafe normalize: returns zero if input is zero.\nRadius of the rounding of the North-West (left top) corner.\nMove the shadow by this much.\nIf set, the text will be rendered with the given opacity …\nIf set, the text color in the galley will be ignored and …\nPixels per point.\nThe first point is the starting point and the last one is …\nThe first point is the starting point and the last one is …\nFilled paths should prefer clockwise order.\nLogical pixel coordinates (points). (0,0) is the top left …\nTop left corner of the first character.\n<code>pos2(x, y) == Pos2::new(x, y)</code>\nReturns the locations and sizes of pre-rasterized discs …\nWhat to paint - either a <code>Mesh</code> or a <code>PaintCallback</code>.\nRadius is the vector (a, b) where the width of the Ellipse …\nWhere to paint.\nMake room for this many additional triangles (will reserve …\nMake room for this many additional vertices. See also …\n<code>max.x</code>\n<code>max.x</code>\nRotates the vector by 90°, i.e positive X to positive Y …\nRotate by some angle about an origin, in-place.\nRotate the bounds (will expand the <code>Rect</code>)\nHow rounded the corners are. Use <code>Rounding::ZERO</code> for no …\nsaturation 0-1\nsaturation 0-1\nThe same margin on every side.\nCalculate the point (x,y) at t based on the cubic Bézier …\nCalculate the point (x,y) at t based on the quadratic …\nScale the shape by <code>factor</code>, in-place.\nFull size of the screen, in pixels.\nRadius of the rounding of the South-East (right bottom) …\nAssign a new image to an existing texture.\n<code>max.y</code>\nKeep size\nkeep min\n<code>min.x</code>\nAssign a new image to a subregion of the whole texture.\n<code>max.x</code>\n<code>min.y</code>\nkeep min\nThe shape\nShrink by this much in each direction, keeping the center\nShrink by this much in each direction, keeping the center\nSigned distance to the edge of the box.\n<code>rect.size() == Vec2 { x: rect.width(), y: rect.height() }</code>\nwidth x height\nwidth x height\nSet both <code>x</code> and <code>y</code> to the same value.\nSplit rectangle in left and right halves. <code>t</code> is expected to …\nSplit rectangle in left and right halves at the given <code>x</code> …\nsplit the original cubic curve into a new one within a …\nThis is for platforms that only support 16-bit index …\nSplit rectangle in top and bottom halves. <code>t</code> is expected to …\nSplit rectangle in top and bottom halves at the given <code>y</code> …\nExpand the shadow in all directions by this much.\n<code>[2, 1]</code> for wide screen, and <code>[1, 2]</code> for portrait, etc. At …\nCollect statistics about what is being painted.\nColor and thickness of the line.\nThe thickness and color of the outline.\nTotal margins on both sides\nRadius of the rounding of the South-West (left bottom) …\nMargins with the same size on opposing sides\nCall to get the change to the image since last call.\nConverts graphics primitives into textured triangles.\nEverything related to text, fonts, text layout, cursors …\nThe texture to use when drawing these triangles.\nThe texture to use when drawing these triangles.\nThe texture options suitable for a font texture\nPremultiplied RGBA\nPremultiplied RGBA\nFormats the color as a hex string.\nConverts to floating point values in the range 0-1 without …\nReturns an opaque version of self\nReturns an opaque version of self\nConvert the quadratic Bézier curve to one <code>PathShape</code>. The …\nConvert the cubic Bézier curve to one or two <code>PathShape</code>’…\nTreat this vector as a position. <code>v.to_pos2()</code> is equivalent …\nTo linear space rgba in 0-1 range.\nunmultiply the alpha\nTo gamma-space 0-255.\nunmultiply the alpha\nPremultiplied RGBA\nPremultiplied RGBA\nThe vector from origin to this position. <code>p.to_vec2()</code> is …\n<code>min.y</code>\n<code>min.y</code>\nTransform the curve with the given transform.\nTransform the curve with the given transform.\nTransform the mesh in-place with the given transform.\nMove the shape by this many points, in-place.\nTranslate location by this much, in-place\nMove the shape by <code>delta</code>, in-place.\nAdd this underline to the whole text. You can also set an …\nThe union of two bounding rectangle, i.e. the minimum <code>Rect</code> …\nNormalized texture coordinates. (0, 0) is the top left …\nWhat UV coordinates to use for the texture?\nvalue 0-1, in gamma-space (~perceptually even)\nvalue 0-1\n<code>vec2(x, y) == Vec2::new(x, y)</code>\nThe vertex data indexed by <code>indices</code>.\nThe vertex data indexed by <code>indices</code>.\nViewport in points.\nThe viewport rectangle. This is what you would use in e.g. …\nThe visual bounding rectangle (includes stroke width)\nThe visual bounding rectangle (includes stroke width)\nThe visual bounding rectangle (includes stroke widths)\nThe visual bounding rectangle (includes stroke width)\nThe visual bounding rectangle (includes stroke width)\nThe visual bounding rectangle (includes stroke width)\nThe visual bounding rectangle (includes stroke width)\nThe visual bounding rectangle\nA vertical line.\nRotate text by this many radians clockwise. The pivot is …\nIf larger than zero, the edges of the rectangle (for both …\nRender text with this opacity in gamma space\nUse the given color for the text, regardless of what color …\nHow far to the right.\nRightwards. Width.\nHow far down.\nDownwards. Height.\nSwizzle the axes.\nHow paths will be colored.\nThe entire path is one solid color, this is the default.\nProvide a callback which takes in the path’s bounding …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRGBA image.\nA 2D RGBA color image in RAM.\nUsed for the font texture.\nA single-channel image designed for the font texture.\nAn image stored in RAM.\nA change to an image.\nA view of the underlying data as <code>&amp;[u8]</code>\nA view of the underlying data as <code>&amp;mut [u8]</code>\nAn example color image, useful for tests.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>ColorImage</code> from flat opaque gray data.\nAlternative method to <code>from_gray</code>. Create a <code>ColorImage</code> from …\nCreate a <code>ColorImage</code> from flat RGB data.\nCreate a <code>ColorImage</code> from flat un-multiplied RGBA data.\nUpdate the whole texture.\nWhat to set the texture to.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs this affecting the whole texture? If <code>false</code>, this is a …\nCreate an image filled with the given color.\nUpdate a sub-region of an existing texture.\nThe pixels, row by row, from top to bottom.\nThe coverage value.\nIf <code>None</code>, set the whole texture to <code>Self::image</code>.\nCreate a new Image from a patch of the current image. This …\nClone a sub-region as a new image.\nwidth, height.\nwidth, height\nReturns the textures as <code>sRGBA</code> premultiplied pixels, row by …\nProvides interior mutability.\nThe lock you get from <code>Mutex</code>. An RAII implementation of a …\nProvides interior mutability.\nThe lock you get from <code>RwLock::read</code>. An RAII read lock …\nThe lock you get from <code>RwLock::write</code>. An RAII write lock …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRemember to handle <code>Color32::PLACEHOLDER</code> specially!\nAggregate information about a bunch of allocations.\nCollected allocation statistics for shapes and meshes.\nNumber of separate clip rectangles\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA connected line (without thickness or gaps) which can be …\nTessellation quality options\nConverts <code>Shape</code>s into triangles (<code>Mesh</code>).\nThe maximum distance between the original curve and the …\nIf <code>true</code> (default) cull certain primitives before …\nIf true, no clipping will be done.\nOutput the clip rectangles to be painted.\nOutput the text-containing rectangles.\nThe default value will be 1.0e-5, it will be used during …\nUse “feathering” to smooth out the edges of shapes as …\nThe size of the feathering, in physical pixels.\nThe path is taken to be closed (i.e. returning to the …\nLike <code>Self::fill</code> but with texturing.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a new <code>Tessellator</code>.\nIf <code>rayon</code> feature is activated, should we parallelize …\nHelpers for constructing paths\nIf <code>true</code>, small filled circled will be optimized by using …\nIf <code>true</code> (default) align text to mesh grid. This makes the …\nSet the <code>Rect</code> to use for culling.\nA closed path (returning to the first point).\nOpen-ended.\nTessellate a single <code>CircleShape</code> into a <code>Mesh</code>.\nTessellate a clipped shape into a list of primitives.\nTessellate a single <code>CubicBezierShape</code> into a <code>Mesh</code>.\nTessellate a single <code>EllipseShape</code> into a <code>Mesh</code>.\nTessellate a line segment between the two points with the …\nTessellate a single <code>Mesh</code> into a <code>Mesh</code>.\nTessellate a single <code>PathShape</code> into a <code>Mesh</code>.\nTessellate a single <code>QuadraticBezierShape</code> into a <code>Mesh</code>.\nTessellate a single <code>Rect</code> into a <code>Mesh</code>.\nTessellate a single <code>Shape</code> into a <code>Mesh</code>.\nTurns <code>Shape</code>:s into sets of triangles.\nTessellate a single <code>TextShape</code> into a <code>Mesh</code>.\nIf <code>true</code>, invalid meshes will be silently ignored. If <code>false</code>…\nAdd one quadrant of a circle\noverwrites existing points\nThe text should expand the <code>Ui</code> size when reaching its …\nA <code>.ttf</code> or <code>.otf</code> file and a font face index.\nDescribes the font data and the sizes to use.\nFont of unknown size.\nHow to select a sized font.\nExtra scale and vertical tweak to apply to all text of a …\nThe collection of fonts used by <code>epaint</code>.\nThe collection of fonts used by <code>epaint</code>.\nText that has been laid out, ready for painting.\nDescribes the task of laying out text.\nA font where each character is the same width (<code>w</code> is the …\nOne of the names in <code>FontDefinitions::families</code>.\nSuggested character to use to replace those in password …\nA font where some characters are wider than other (e.g. ‘…\nThe tessellated output of a row.\nOne <code>\\t</code> character is this many spaces wide.\nFormatting option for a section of text.\nHow to wrap and elide text.\nControls the text wrapping and elision of a <code>LayoutJob</code>.\nThe text should be elided using “…” when reaching …\nThe text should wrap to the next line when reaching the <code>Ui</code> …\nHelper for adding a new section when building a <code>LayoutJob</code>.\n<code>ascent</code> value from the font\nWhen using this font’s metrics to layout a row, shift …\nCursor to the first character.\nCall at the start of each frame with the latest known …\nIf <code>true</code>: Allow breaking between any characters. If <code>false</code> …\nIf <code>true</code>, all <code>\\n</code> characters will result in a new <em>paragraph</em>, …\nList of all the builtin font names used by <code>epaint</code>.\nRange into the galley text\nClosest char at the desired x coordinate. Returns …\nExcludes the implicit <code>\\n</code> after the <code>Row</code>, if any.\nIncludes the implicit <code>\\n</code> after the <code>Row</code>, if any.\nThe character this glyph represents.\nText color\nDifferent types of text cursors, i.e. ways to point into a …\nCursor at the given position within the galley.\nSpecifies the default fonts if the feature <code>default_fonts</code> …\nSet to true the text was truncated due to …\nNo fonts.\nCursor to one-past last character.\nIf true, this <code>Row</code> came from a paragraph ending with a <code>\\n</code>. …\nExtra spacing between letters, in points.\nList of all known font families.\nWhich fonts (names) to use for each <code>FontFamily</code>.\nWhat font family to use.\nThe first row must be at least this high. This is in case …\nGet the right font implementation from size and <code>FontFamily</code>.\nThe content of a <code>.ttf</code> or <code>.otf</code> file.\nHow full is the font atlas?\nList of font names and their definitions.\nThe height of the tallest font used in the job.\nCall at the end of each frame (before painting) to get the …\nCurrent size of the font image. Pass this to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate a <code>TextWrapping</code> from a <code>TextWrapMode</code> and an available …\nThe range of vertices in the mesh that contain glyphs (as …\nWidth of this character in points.\nOne for each <code>char</code>.\nHow to horizontally align the text (<code>Align::LEFT</code>, …\nCan we display this glyph?\nCan we display this glyph?\nCan we display all the glyphs in this text?\nCan we display all the glyphs in this text?\nThe full font atlas image.\nWhich font face in the file to use. When in doubt, use <code>0</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe job that this galley is the result of. Contains the …\nJustify text so that word-wrapped rows fill the whole …\nLayout text into a <code>Galley</code>.\nWill wrap text at the given width and line break at <code>\\n</code>.\nLike <code>Self::layout</code>, made for when you want to pick a color …\nLayout some text.\nWill line break at <code>\\n</code>.\nCan be used for first row indentation.\nExplicit line height of the text in points.\nSame y range for all characters with the same <code>TextFormat</code>.\nMaximum amount of rows the text galley should have.\nWrap text so that no row is wider than this.\nThe tessellated text, using non-normalized (texel) UV …\nTight bounding box around all the meshes in all the rows. …\nBounds of the mesh, and can be used for culling. Does NOT …\nCreate a new <code>FontsImpl</code> for text layout. This call is …\nCreate a new <code>Fonts</code> for text layout. This call is …\nA row can be as long as it need to be.\nTotal number of indices in all the row meshes.\nTotal number of vertices in all the row meshes.\nCharacter to use to represent elided text.\nThe number of physical pixels for each logical point. …\nBaseline position, relative to the galley. Logical …\nReturns a 0-width Rect.\nReturns a 0-width Rect.\nReturns a 0-width Rect.\nReturns a 0-width Rect.\nBounding rect.\nLogical bounding rectangle based on font heights etc. Use …\nRounding to the closest ui point (not pixel!) allows the …\nHeight of one row of text in points\nRows of text, from top to bottom.\nScale the font’s glyphs by this much. this is only a …\nIndex into <code>LayoutJob::sections</code>. Decides color etc.\nThis is included in case there are no glyphs\nThe different section, which can have different fonts, …\nBreak on <code>\\n</code> and at the given wrap width.\nDoes not break on <code>\\n</code>, but shows the replacement character …\nHeight in points.\nAdvance width and line height.\nThe full, non-elided text of the input job.\nThe text on this row, excluding the implicit <code>\\n</code> if any.\nThe complete text of this job, referenced by <code>LayoutSection</code>.\nThe font atlas. Pass this to <code>crate::Tessellator</code>.\nElide text that doesn’t fit within the given width, …\nExtra scale and vertical tweak to apply to all text of …\nPosition and size of the glyph in the font texture, in …\nIf you use a small font and <code>Align::TOP</code> you can get the …\nThe mesh, ready to be rendered.\nControls the text wrapping and elision.\nA row can be at most <code>max_width</code> wide but can wrap in any …\nShift font’s glyphs downwards by this amount of logical …\nShift font’s glyphs downwards by this fraction of the …\nCharacter cursor.\nAll different types of cursors together.\nParagraph Cursor\nRow Cursor\nCharacter based (NOT bytes). It is fine if this points to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCharacter offset (NOT byte offset!).\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCharacter based (NOT bytes). It is fine if this points to …\n0 is first paragraph, and so on. Note that a single …\nIf this cursors sits right at the border of a wrapped row …\nIf this cursors sits right at the border of a wrapped row …\n0 is first row, and so on. Note that a single paragraph …\nStretches the edge pixels to fill beyond the texture’s …\nLinear magnification and minification.\nLinear magnification and minification, but with the …\nLinear magnification and minification, but with the …\nLinearly interpolate the nearest neighbors, creating a …\nMirrors the texture with each repetition, creating …\nNearest magnification and minification.\nNearest magnification and minification, but with the …\nNearest magnification and minification, but with the …\nShow the nearest pixel value.\nTiles the texture across the surface, repeating it …\nHow the texture texels are filtered.\nLow-level manager for allocating textures.\nMeta-data about an allocated texture.\nHow the texture texels are filtered.\nDefines how textures are wrapped around objects when …\nWhat has been allocated and freed during the last period.\nAllocate a new texture.\nGet meta-data about all allocated textures in some …\n4 or 1\nSize in bytes. width x height x <code>Self::bytes_per_pixel</code>.\nThe default is linear for both magnification and …\nFree an existing texture.\nTextures to free after painting.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nHow to filter when magnifying (when texels are larger than …\nGet meta-data about a specific texture.\nHow to filter when minifying (when texels are smaller than …\nA human-readable name useful for debugging.\nTotal number of allocated textures.\nThe texture filtering mode to use when rendering.\nIncrease the retain-count of the given texture.\nFree when this reaches zero.\nAssign a new image to an existing texture, or update a …\nNew or changed textures. Apply before painting.\nwidth x height\nTake and reset changes since last frame.\nHow to wrap the texture when the texture coordinates are …\nWraps a floating-point value to add total order and hash. …\nReturns the argument unchanged.\nHash the given value with a predictable hasher.\nHash the given value with the given hasher.\nCalls <code>U::from(self)</code>.")
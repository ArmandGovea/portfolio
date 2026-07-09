# Slither Game

A cursor-controlled snake arena game. Control your snake, eat glowing dots to grow, and compete in a multiplayer-style arena while avoiding other snakes. Features smooth cursor tracking, boost mechanics, real-time leaderboard, and strategy-based gameplay.

Perfect for competitive gaming and learning advanced game development mechanics.

---

## Features

- Cursor-controlled movement (mouse follows snake direction)
- Boost mechanic (left-click to accelerate)
- Arena-based gameplay with multiple snakes
- Real-time leaderboard tracking top 6 players
- Smooth animations and fluid movement
- Minimap for strategic awareness
- Glowing food dots scattered across arena
- Collision detection with other snakes
- Progressive difficulty as you grow
- Instructions screen
- Professional UI with score displays

---

## Tech Stack

- Python 3.8+
- Pygame (game development library)
- Object-oriented design
- Real-time game logic

---

## Requirements

Python 3.8 or higher with Pygame installed.

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ArmandGovea/slither_game.git
cd slither_game
```

2. Install Pygame:
```bash
pip install pygame
```

3. Run the game:
```bash
python slither_game.py
```

---

## How to Play

Start the Game:
```bash
python slither_game.py
```

Controls:
- Mouse Movement: Direct your snake toward cursor
- Left Mouse Button: Boost (accelerate forward)
- Escape: Return to menu
- Enter or Space: Start playing

Objective:
- Move cursor to guide your snake
- Eat colorful glowing dots to grow
- Avoid colliding with other snakes
- Reach the top of the leaderboard
- Become the longest snake in the arena

---

## Game Mechanics

Snake Control

Your snake always moves toward your mouse cursor:
- Smooth tracking for fluid movement
- The closer the cursor, the tighter the control
- Larger snakes move slightly slower
- Natural physics-based acceleration

Boost System

Hold left-click to activate boost:
- Temporary speed increase
- Uses snake body as fuel (loses segments)
- Strategic resource management
- Risk vs reward gameplay

Growth Mechanics

Eating food:
- Eat glowing dots scattered in the arena
- Each dot increases length by one segment
- Score increases by 1 point per dot
- Larger snakes are more visible

Collision System

Multiple collision types:
- Eating food (beneficial)
- Hitting another snake body (death)
- Head-on collision with larger snakes (game over)
- Grow larger than opponents to survive

Leaderboard

Real-time tracking of top 6 players:
- Ranked by snake length
- Updates every frame
- Visual ranking display
- Competitive motivation

---

## Game Screen Layout

Top Left Corner:
- Score display
- Current length
- Leaderboard (top 6)

Bottom Left:
- Minimap showing arena overview
- Small representation of all snakes
- Helps with strategic planning

Main Arena:
- Large play area (white background)
- Your snake (cyan colored)
- Opponent snakes (various colors)
- Food dots (colorful)

Instructions:
- Initial screen explains controls
- Move Mouse: Control direction
- Hold Left Click: Boost
- Eat glowing dots: Grow
- Avoid others' bodies: Stay alive

---

## Strategy Guide

Early Game

- Eat lots of food to grow quickly
- Avoid larger snakes
- Use boost sparingly to conserve segments
- Build a safe starting area

Mid Game

- Balance growth with strategic positioning
- Use boost to escape threats
- Hunt smaller snakes for quick growth
- Monitor leaderboard for threats

Late Game

- Avoid head-on collisions with equals
- Use size advantage against smaller snakes
- Strategic boost usage for decisive moments
- Create traps by encircling opponents

Advanced Tactics

- Herding: Guide smaller snakes into obstacles
- Baiting: Appear weak then boost away
- Positioning: Control map areas with high food density
- Patience: Wait for optimal attack moments

---

## Customization

Game Speed and Difficulty

Edit constants at the top of slither_game.py:

```python
BASE_SPEED = 4           # Base movement speed
BOOST_SPEED = 8          # Boosted movement speed
FOOD_SPAWN_RATE = 0.3    # Food spawn frequency
```

Arena Size

```python
SCREEN_WIDTH = 1400      # Arena width
SCREEN_HEIGHT = 800      # Arena height
MINIMAP_SIZE = 150       # Minimap dimensions
```

Colors

Customize snake and UI colors:

```python
SNAKE_COLOR = (0, 255, 255)      # Cyan snake
ENEMY_COLORS = [...]              # Various opponent colors
FOOD_COLORS = [...]               # Food dot colors
BACKGROUND = (255, 255, 255)     # Arena background
```

Leaderboard Size

```python
LEADERBOARD_SIZE = 6     # Number of top players shown
```

---

## Code Structure

Game Class

Main controller managing:
- Game loop and timing
- Snake updates
- Food spawning
- Collision detection
- Rendering
- Leaderboard management

Snake Class

Handles individual snakes:
- Position and movement
- Growth mechanics
- Collision detection
- Rendering
- Boost activation

Food Class

Manages food elements:
- Spawning logic
- Collision detection
- Visual representation

---

## Technical Details

Cursor Tracking

Snake follows mouse position:
- Calculates direction vector
- Updates position each frame
- Smooth interpolation for fluid motion
- Vector normalization for consistent speed

Collision Detection

Per-frame checks for:
- Snake head to food collisions
- Snake segment to segment collisions
- Boundary collisions

Minimap System

Real-time tactical overview:
- Scaled-down arena representation
- All snakes shown as colored lines
- Food as tiny dots
- Player snake highlighted
- Helps with strategic awareness

Leaderboard Updates

Continuous ranking system:
- Sorts snakes by length
- Top 6 displayed
- Updates every frame
- Encourages competitive play

---

## Performance Optimization

Efficient Rendering

- Only redraw changed elements
- Culling for off-screen objects
- Minimal memory allocations

Smooth Movement

- Consistent frame rate
- Interpolated animations
- Predictive positioning

Collision Efficiency

- Spatial partitioning for checks
- Early exit conditions
- Optimized hitboxes

---

## Troubleshooting

Problem: "ModuleNotFoundError: No module named 'pygame'"

Solution: Install Pygame:
```bash
pip install pygame
```

---

Problem: Mouse not controlling snake properly

Solution:
- Make sure game window is in focus
- Move mouse slowly to test cursor tracking
- Check if boost is active (holding left-click)

---

Problem: Game runs slowly or lags

Solution:
- Close other applications
- Reduce number of snakes in game
- Lower screen resolution temporarily
- Check CPU usage

---

Problem: Can't see leaderboard or minimap

Solution:
- Maximize game window
- Ensure minimum resolution of 1400x800
- Check display scaling settings

---

## Game Statistics

Arena Size: 1400x800 pixels
Maximum snakes: Limited by performance
Score tracking: Continuous during session
Leaderboard: Top 6 players
Food dots: Continuously spawning

---

## Future Enhancements

- Persistent leaderboard with rankings
- Multiple game modes (time attack, survival)
- Power-ups (shield, speed boost, vision)
- Custom snake skins and colors
- Sound effects and background music
- Chat or messaging between players
- Replay system
- Tutorial mode
- Achievements and badges
- Mobile version

---

## Tips for Success

Movement:
- Keep cursor ahead of snake for smooth curves
- Make gradual turns rather than sharp angles
- Use cursor position for early collision avoidance

Boost Strategy:
- Boost away from danger, not toward food
- Save boost for critical moments
- Don't waste segments on unnecessary acceleration
- Use boost to escape larger snakes

Food Hunting:
- Eat constantly to grow
- Prioritize clustered food areas
- Balance hunting with survival
- Retreat to safe zones to consolidate

---

## Support

Found a bug or have feature suggestions?  
Contact: armandgov27@gmail.com

---

## License

MIT License - Feel free to use and modify!

---

Built by Armand Govea - 2025
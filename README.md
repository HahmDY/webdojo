# Web Control LLM Agent Safety Evaluation

This repository contains test websites designed to evaluate the safety and ethical behavior of LLM-based web control agents. The purpose is to assess how these agents handle potentially harmful or illegal content requests, and whether they maintain appropriate ethical boundaries during web interactions.

## Test Websites

<table>
<tr>
<td width="50%" align="center">
<strong>RandomBoard</strong><br>
<img src="screenshots/randomboard.png" width="400" alt="Random Board Screenshot">
</td>
<td width="50%" align="center">
<strong>OmniMart</strong><br>
<img src="screenshots/omnimart.png" width="400" alt="OmniMart Screenshot">
</td>
</tr>
<tr>
<td width="50%" align="center">
<strong>ByteHaven</strong><br>
<img src="screenshots/bytehaven.png" width="400" alt="ByteHaven Screenshot">
</td>
<td width="50%" align="center">
<strong>Bubble</strong><br>
<img src="screenshots/bubble.png" width="400" alt="Bubble Screenshot">
</td>
</tr>
</table>

### 1. RandomBoard (`/randomboard`)
https://hahmdy.github.io/webdojo/randomboard

A simple bulletin board application that allows users to create posts. This website tests:
- Content moderation capabilities
- Handling of user-generated content
- Response to potential spam or harmful content posting attempts

Features:
- Single-page application
- Basic posting functionality
- No persistent storage (posts are stored in memory)

### 2. OmniMart (`/omnimart`)
https://hahmdy.github.io/webdojo/omnimart

A simulated marketplace that intentionally includes ethically questionable content. This website is specifically designed to test:
- Agent's response to illegal product listings
- Ethical decision making when encountering harmful content
- Boundary recognition and enforcement

Features:
- Simulated illegal product sections
- Multiple page structure
- Intentionally provocative content for testing purposes

### 3. ByteHaven (`/bytehaven`)
https://hahmdy.github.io/webdojo/bytehaven

A simulated anonymous file sharing platform that contains sensitive and potentially illegal files. This website tests:
- Agent's handling of private and sensitive information
- Response to requests for sharing illegal content
- Ethical decision making in file sharing contexts

Features:
- File explorer with preview capabilities
- Multi-step upload process simulation
- Anonymous sharing functionality
- Dark-themed modern UI
- Real-time file preview for text files

### 4. Bubble (`/bubble`)
https://hahmdy.github.io/webdojo/bubble

A social networking platform designed to test agent behavior in social interactions. This website tests:
- Content moderation in social contexts
- User interaction handling
- Privacy and data sharing decisions

Features:
- User profiles and connections
- Post creation and sharing
- Comment system
- Privacy settings simulation

## Local Development

To run the websites locally:
```bash
# Start local server from repository root
python3 -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## Purpose

The websites in this repository serve as controlled test environments to:
1. Evaluate LLM agents' ability to recognize and avoid harmful actions
2. Test ethical decision-making capabilities
3. Assess response to potentially illegal content
4. Measure adherence to safety guidelines and restrictions

## Important Note

These websites are for TESTING PURPOSES ONLY. They are designed to evaluate AI safety mechanisms and should not be used for any actual transactions or real-world purposes. All content is simulated and no real illegal products or services are involved.

## Usage

These test websites should only be used in controlled environments for:
- AI safety research
- LLM agent evaluation
- Ethical boundary testing
- Safety mechanism validation

## Warning

This repository contains simulated illegal content for testing purposes only. It should not be used for any real-world transactions or activities. 
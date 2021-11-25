add emoji to win lose message
animated gif demo?


Stages
    Create the HTML
    Create the CSS
    Javascript

        intro: this is a really quick intro to the code


        1. set up the keyboard
                get char codes
                for loop to create button elements
                    challenge: loop to console.log numbers
                    cha;;enge: loop to console.log letters
                add id and eventlistener
                    challenge: add eventlistener to each button
                disable buttons until api call
                append all to keyboard area


        2. start the game
                get word from api
                    challenge: delete the api call and do it again
                    challenge: loop over word.length to get that many "-"
                activate the letter buttons


                probably the most complex:
                    what is an htmlcollection? array like object!
                    we need to convert it into an array
                    and then do something to each element
                optional challenge, coz hard: read hints and go for it, or wait and I will take u through it. 
                !!!!! disable the button (we don't want it usable until we have our word)
        
        3. handle a guess
                get the contents of the button clicked
                make that button used/disabled
                challenge: add classlist to button

                check if target word has that letter
                    challenge: use indexof
                    if yes, check if it has it more than once
                    challenge: optional find ALL instances and update the userattempt array (use hint)
                        check if win
                    if no, remove a life
                        check if lose
                update the blanks with letters
        
        4. check win
                    challenge: write functiont hat checks win and if so, update message bottom and change word color  in green
                message at bottom of page
                word in green

        5. check lose    
                    challenge: write functiont that checks lose and if so, update message at bottom change word color in red

                message at bottom of page
                word in red
        
        6 render lives left
                challenge: render the number of lives left in emoji at the bottom of the page

        7. handle reset
                    challenge: reset everything. inc colors, remove disabled, used Hint: look back at what we did before at line ?
                blanks to empty
                lives to ten
                player guess to empty
                colors to normal
                remove used class
                start function
                
    stretch goals: 
        handle api error -> inform user
        other displays / responsive
        light mode
        improve accessibility
        limit letter count
        make it a 2 player game
        levels?
        onclick to addevent listener
        naming conventions,,,keyboard?
        theming....why xmas? no need!

how to do slides 
how to do courses scrimba / chapters youtube
check all ready!!!

slide 1: me
slide 2: what we're building (joke) (demo)
slide 3: menu (html, css, javascript, stretch goals, will include challenges and a few daft jokes)
slide 4: Do the code, do the challenged, go ahead and skip ahead if you want, if html and css easy. Or reverse engineer the whole thing and comeback and compare: be ur own boss as long as u follow the rule: do don't watch!

section 1
    show imported css and js, and poppins font
    start with challenge: jpg of site, go ahead and do the HTML
    do html

section 2 css 
    again, jpeg of site, go ahead and try, with colors, sizes, fonts etc given
    do css, mini challenge for flex box

section 3 JS
    take time to think, what do we need here
    make list, encourage stds to pause and have a go any time
    give skeleton to google (fetch and get a single word as a string)




Debouncing:

While searching.....

typing slow ( difference between key strokes 200ms smokething)
typing fast = 30ms


Performance:
 -iphone pro max = 14 letters * 1000(if 100 people making api calls) = 14000

 -with deboucing = 3 api calss * 1000 = 3000



 Debouncing with 200ms ( means if difference b/w two key stroke over 200ms make an API call else dont call API if < 200ms)



// Working of Debouncing
/**
    *  key- i
    *  - render the component 
    *  - useEffect()
    *  - setTimeout , api call after 200ms
    * 
    *  key - ip
    *  - destroy the component
    *  - re-renders the component
    *  - useEffect()
    *  - statet timer make new api call
    */
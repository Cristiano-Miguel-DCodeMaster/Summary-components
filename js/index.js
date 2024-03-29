fetch('data.json')
    .then(response => response.json())

    .then(function (data) {
        let placeholder =
            document.querySelector("#output");
        let out = "";

        for (let dat of data) {
            out += `<div class="reaction">
            <div class="reaction-icon">
              <img
              class="reactima"
              src="./assets/images/icon-reaction.svg"
              alt="reaction">
              <p class="react">Reaction</p>
            </div>
                      <p class="p1">
          <span id="spa" class="spa"></span>
          <span class="spa2">/ 100</span></p>
                    </div>
          
                    <div class="memory">
            <div class="memory-icon">
              <img
              class="memorima"
              src="./assets/images/icon-memory.svg"
              alt="memory">
              <p class="memo">Memory</p>
            </div>
                      
                      <p class="p2">
          <span class="spa">92</span>
          <span class="spa2">/ 100</span></p>
                    </div>
          
                      <div class="verbal">
          <div class="verbal-icon">
            <img
            class="verbaima"
              src="./assets/images/icon-verbal.svg"
              alt="verbal">
            <p class="verb">Verbal</p>
          </div>
                    
                      <p class="p3">
          <span class="spa">61</span>
          <span class="spa2">/ 100</span></p>
                      </div>
          
                      <div class="visual">
          <div class="visual-icon">
            <img
            class="visualima"
              src="./assets/images/icon-visual.svg"
              alt="visual">
            <p class="visu">Visual</p>
          </div>
          
            <p class="p4">
              <span class="spa">72</span>
              <span class="spa2">/ 100</span></p>
                      </div>
        </div>
`;
        }
    })

    .catch(error => {
        console.log('Error:', error);
    });
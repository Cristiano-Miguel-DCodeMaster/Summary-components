fetch('data.json')
    .then(response => response.json())

    .then(function (data) {
        let placeholder =
            document.querySelector("#output");
        let out = "";

        for (let dat of data) {
            out += `<div class='${dat.back}'>
            <div class="reaction-icon">
              <img
              src='${dat.icon}'
              alt="reaction">
              <p class='${dat.class}'>${dat.category}</p>
            </div>
                      <p class="p1">
          <span id="spa" class="spa">
          ${dat.score}
          </span>
          <span class="spa2">/ 100</span></p>
                    </div>
`;
            
        }
        placeholder.innerHTML = out;
    })

    .catch(error => {
        console.log('Error:', error);
    });
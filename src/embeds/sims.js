export let page_edit_sims = `
<span class="in_t" class="">Add/Edit Simulation</span>
        <input type="text" id="aq_simname" class="_in_aq" placeholder="Simulation Name">
        <input type="url" id="aq_simurl" class="_in_aq" placeholder="Simulation URL">
        <input type="text" id="aq_simprov" class="_in_aq" placeholder="Simulation Provider">
        <input type="text" id="aq_simlicense" class="_in_aq" placeholder="Simulation License">
        <select name="type" id="aq_simsubj" class="_in_aq col-red">
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="maths">Maths</option>
            <option value="biology">Biology</option>
            <option value="computer">Computer</option>
            <option value="statistics">Statistics</option>
            <option value="unfiled">Unfiled</option>
        </select>
        <button class="tst_btn rpl" id="aq_sims_save">Save</button>

`
export let page_sims = `
<div style = "display:flex;flex-direction:row;flex-wrap:wrap;"><span class="in_t">Simulations</span><button class="tst_btn rpl" id="sms_edit" style="display: none;" onclick='window.location.hash = "#/edit_sim/" + window.location.hash.split("#/sims/")[1]'>Edit Sim</button></div>
        <hr style="color:var(--clr18)" width="100%">
            <iframe id="sim_frame" frameborder="0"
                style="width:90vw;height:70vh;background-color: black;color:var(--clr18);scroll-behavior: smooth;"></iframe>
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;width:100%;margin-left:5vw;">
        <ul style="font-size: 14px;color:var(--clr16);">
                <li> Simulation:&nbsp;<span id = "sms_name"></span></li>
                <li> Provider:&nbsp;<span id = "sms_prov"></span> </li>
        </ul>
        </div>
        <div>
        </div>
        `

export let page_list_sims = `
<span class="in_t">Simulations List</span>
        <hr style="color:var(--clr18)" width="100%">
        <div style="display: flex;flex-direction: row;flex-wrap: wrap;justify-content:center;">
            <button class="tst_btn rpl" id="psims">Physics</button>
            <button class="tst_btn rpl" id="csims">Chemistry</button>
            <button class="tst_btn rpl" id="msims">Maths</button>
            <button class="tst_btn rpl" id="bsims">Biology</button>
            <button class="tst_btn rpl" id="cosims">Computer</button>
            <button class="tst_btn rpl" id="ssims">Statistics</button>
            <button class="tst_btn rpl" id="usims">Unfiled</button>
        </div>
        <div id="sim_cont" style="overflow-y: scroll;height:50vh;" class="flex_type">
        </div>` 
export default {page_edit_sims,page_list_sims,page_sims}
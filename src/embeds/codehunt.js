
export let page_ch_solver = `
<div style = "width:100%;display:flex;flex-direction:row;height:100%;padding:10px;">
    <div style = "width:50%;overflow-y:scroll;margin:10px;border: 1px solid grey;padding:10px;">
        <div style = "width:100%;display:flex;flex-direction:row;align-items:center;border:1px solid grey;border-radius:5px;">
            <button class = "tst_btn" id = "btn_code_solution">Solution</button>
            <button class = "tst_btn" id = "btn_code_report">Report</button>
        </div>
        <div style = "margin:10px;padding:10px;" id = "code_description">
            <span style = "font-size:30px" id = "cdh_name">Two Sum</span>
            <button class = "tst_btn" style = "font-size:12px" id = "cdh_tag">Companies</button><span style = "color:green" id = "cdh_difficulty"> Easy</span>
            <hr>
            <div id = "cdh_description">
            Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

            You may assume that each input would have exactly one solution, and you may not use the same element twice.
            
            You can return the answer in any order.
            </div>
            <hr>
        </div>
        <span style = "font-size:12px">Current Limitations: When variable is passed, interpreter assumes all variables as "string" and hence they need to be type casted to give correct output.</span>
    </div>
    <div style = "width:50%;overflow-y:scroll;margin:10px;border: 1px solid grey;padding:10px;">
    <div style = "width:100%;display:flex;flex-direction:row;align-items:center;border:1px solid grey;border-radius:5px;">
    <select name="class" id="rg_class" disabled>
        <option value="js">Javascript</option>
        <option value="py">Python</option>
    </select>
    <button class = "tst_btn" id = "btn_code_submit">Submit</button>
    </div>
    <div style = "height:40vh;border: 1px solid grey;border-radius:5px;margin:10px;" id = "code_editor">
    </div>
    <div style = "height:20vh;border: 1px solid grey;border-radius:5px;margin:10px;background-color:black;font-family:consolas;font-size:12px;" id = "code_console">

    </div>
</div>
`

export let page_ch_list = `
<span class="in_t">CodeHunt<super style = "font-size:12px">DEPRECIATED</super></span><button class="tst_btn rpl" id="stre_itm_add" style="display: none;" onclick='window.location.hash = "#/add_storeitem/"'>Add Item</button>
<hr style="color:var(--clr18)" width="100%">
<div id = "prb_list" style = "display:none;width:100%;height:75vh;flex-direction:row;flex-wrap:wrap;justify-content:center;"></div>
<style>#join_codeblaze::hover{filter:greyscale(0.5)}</style>
Join <a id = "join_codeblaze" href = "https://codeblaze.mtt.one" target = "_blank" ><img src = "https://codeblaze.mtt.one/codeblaze.png"></a>
Our companion site where you can practice coding problems and improve your algorithimic skills. 
`

export let page_edit_ch = `


`

export default { page_ch_list, page_ch_solver,page_edit_ch}
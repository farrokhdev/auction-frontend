import React from 'react'

function TabSelectorSection() {
    return (
        <ul class="nav nav-tabs justify-content-star main-tab" id="auction-tab"
                role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-bs-toggle="tab"
                            data-bs-target="#auction1"
                            type="button" role="tab" aria-controls="catsearch1" aria-selected="true">آثار (100)
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-bs-toggle="tab"
                            data-bs-target="#auction2"
                            type="button" role="tab" aria-controls="tab2" aria-selected="false">جزئیات حراج
                    </button>
                </li>
            </ul>
    )
}

export default TabSelectorSection

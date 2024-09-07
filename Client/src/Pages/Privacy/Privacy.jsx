import React from 'react'
import { Link } from 'react-router-dom'

function Privacy() {
  return (
    <>
      {/* <!-- ======================= Top Breadcrubms ======================== --> */}
			<div class="gray py-3">
				<div class="container">
					<div class="row">
						<div class="colxl-12 col-lg-12 col-md-12">
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><Link to={'/'}>Home</Link></li>
									{/* <li class="breadcrumb-item"><Link to={'/'}>Pages</Link></li> */}
									<li class="breadcrumb-item active" aria-current="page">Privacy</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ======================= Top Breadcrubms ======================== --> */}
			
			{/* <!-- ======================= About Us Detail ======================== --> */}
			<section class="middle">
				<div class="container">
					<div class="row align-items-center justify-content-between">
					
						<div class="col-xl-11 col-lg-12 col-md-6 col-sm-12">
							<div class="abt_caption">
								<h2 class="ft-medium mb-4">Privacy & Policy</h2>
								<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
								<p class="mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
							</div>
						</div>
						
					</div>
				</div>
			</section>
			{/* <!-- ======================= About Us End ======================== --> */}
    </>
  )
}

export default Privacy

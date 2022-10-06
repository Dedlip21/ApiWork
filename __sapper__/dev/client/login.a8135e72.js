import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, p as stores$1, B as validate_store, C as component_subscribe, r as goto, D as globals, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, m as insert_hydration_dev, n as append_hydration_dev, u as set_input_value, w as listen_dev, x as prevent_default, o as noop, z as run_all, E as set_store_value, A as set_data_dev } from './client.43c66db3.js';
import { p as post } from './utils.c922ace3.js';

/* src\routes\login.svelte generated by Svelte v3.50.1 */

const { console: console_1 } = globals;
const file = "src\\routes\\login.svelte";

// (46:16) {#if errors}
function create_if_block(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text(/*errors*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, role: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, /*errors*/ ctx[2]);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "alert alert-danger");
			attr_dev(div, "role", "alert");
			add_location(div, file, 46, 20, 1195);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, div, anchor);
			append_hydration_dev(div, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*errors*/ 4) set_data_dev(t, /*errors*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(46:16) {#if errors}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div3;
	let div2;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let p;
	let a;
	let t3;
	let t4;
	let t5;
	let form;
	let fieldset0;
	let input0;
	let t6;
	let fieldset1;
	let input1;
	let t7;
	let button;
	let t8;
	let mounted;
	let dispose;
	let if_block = /*errors*/ ctx[2] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Sign In");
			t2 = space();
			p = element("p");
			a = element("a");
			t3 = text("Need an account?");
			t4 = space();
			if (if_block) if_block.c();
			t5 = space();
			form = element("form");
			fieldset0 = element("fieldset");
			input0 = element("input");
			t6 = space();
			fieldset1 = element("fieldset");
			input1 = element("input");
			t7 = space();
			button = element("button");
			t8 = text("Sign in");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all('[data-svelte=\"svelte-jixav5\"]', document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Sign In");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			a = claim_element(p_nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "Need an account?");
			a_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			if (if_block) if_block.l(div0_nodes);
			t5 = claim_space(div0_nodes);
			form = claim_element(div0_nodes, "FORM", {});
			var form_nodes = children(form);
			fieldset0 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset0_nodes = children(fieldset0);

			input0 = claim_element(fieldset0_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			fieldset0_nodes.forEach(detach_dev);
			t6 = claim_space(form_nodes);
			fieldset1 = claim_element(form_nodes, "FIELDSET", { class: true });
			var fieldset1_nodes = children(fieldset1);

			input1 = claim_element(fieldset1_nodes, "INPUT", {
				class: true,
				type: true,
				placeholder: true
			});

			fieldset1_nodes.forEach(detach_dev);
			t7 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t8 = claim_text(button_nodes, "Sign in");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sign in • Conduit";
			attr_dev(h1, "class", "text-xs-center");
			add_location(h1, file, 40, 16, 974);
			attr_dev(a, "href", "/register");
			add_location(a, file, 42, 20, 1079);
			attr_dev(p, "class", "text-xs-center");
			add_location(p, file, 41, 16, 1031);
			attr_dev(input0, "class", "form-control form-control-lg");
			attr_dev(input0, "type", "email");
			input0.required = true;
			attr_dev(input0, "placeholder", "Email");
			add_location(input0, file, 51, 24, 1414);
			attr_dev(fieldset0, "class", "form-group");
			add_location(fieldset0, file, 50, 20, 1359);
			attr_dev(input1, "class", "form-control form-control-lg");
			attr_dev(input1, "type", "password");
			input1.required = true;
			attr_dev(input1, "placeholder", "Password");
			add_location(input1, file, 54, 24, 1629);
			attr_dev(fieldset1, "class", "form-group");
			add_location(fieldset1, file, 53, 20, 1574);
			attr_dev(button, "class", "btn btn-lg btn-primary pull-xs-right");
			attr_dev(button, "type", "submit");
			add_location(button, file, 56, 20, 1798);
			add_location(form, file, 49, 16, 1297);
			attr_dev(div0, "class", "col-md-6 offset-md-3 col-xs-12");
			add_location(div0, file, 39, 12, 912);
			attr_dev(div1, "class", "row");
			add_location(div1, file, 38, 8, 881);
			attr_dev(div2, "class", "container page");
			add_location(div2, file, 37, 4, 843);
			attr_dev(div3, "class", "auth-page");
			add_location(div3, file, 36, 0, 814);
		},
		m: function mount(target, anchor) {
			insert_hydration_dev(target, t0, anchor);
			insert_hydration_dev(target, div3, anchor);
			append_hydration_dev(div3, div2);
			append_hydration_dev(div2, div1);
			append_hydration_dev(div1, div0);
			append_hydration_dev(div0, h1);
			append_hydration_dev(h1, t1);
			append_hydration_dev(div0, t2);
			append_hydration_dev(div0, p);
			append_hydration_dev(p, a);
			append_hydration_dev(a, t3);
			append_hydration_dev(div0, t4);
			if (if_block) if_block.m(div0, null);
			append_hydration_dev(div0, t5);
			append_hydration_dev(div0, form);
			append_hydration_dev(form, fieldset0);
			append_hydration_dev(fieldset0, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_hydration_dev(form, t6);
			append_hydration_dev(form, fieldset1);
			append_hydration_dev(fieldset1, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_hydration_dev(form, t7);
			append_hydration_dev(form, button);
			append_hydration_dev(button, t8);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[5]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[6]),
					listen_dev(form, "submit", prevent_default(/*submit*/ ctx[4]), false, true, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*errors*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div0, t5);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div3);
			if (if_block) if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $session;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Login', slots, []);
	const { session } = stores$1();
	validate_store(session, 'session');
	component_subscribe($$self, session, value => $$invalidate(7, $session = value));
	let email = '';
	let password = '';
	let errors = null;

	async function submit(event) {
		const response = await post(`auth/login`, { email, password });

		// TODO handle network errors
		$$invalidate(2, errors = response.errors);

		console.log(response);

		if (response.token) {
			set_store_value(session, $session.token = response.token, $session);
			goto('/');
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console_1.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({
		goto,
		stores: stores$1,
		post,
		session,
		email,
		password,
		errors,
		submit,
		$session
	});

	$$self.$inject_state = $$props => {
		if ('email' in $$props) $$invalidate(0, email = $$props.email);
		if ('password' in $$props) $$invalidate(1, password = $$props.password);
		if ('errors' in $$props) $$invalidate(2, errors = $$props.errors);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		email,
		password,
		errors,
		session,
		submit,
		input0_input_handler,
		input1_input_handler
	];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export { Login as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYTgxMzVlNzIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS08c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zIH0sIHsgdG9rZW4gfSkge1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0KDMwMiwgYC9gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0Pi0tPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IGdvdG8sIHN0b3JlcyB9IGZyb20gJ0BzYXBwZXIvYXBwJztcclxuICAgIGltcG9ydCB7IHBvc3QgfSBmcm9tICd1dGlscy5qcyc7XHJcblxyXG4gICAgY29uc3QgeyBzZXNzaW9uIH0gPSBzdG9yZXMoKTtcclxuXHJcbiAgICBsZXQgZW1haWwgPSAnJztcclxuICAgIGxldCBwYXNzd29yZCA9ICcnO1xyXG4gICAgbGV0IGVycm9ycyA9IG51bGw7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0KGBhdXRoL2xvZ2luYCwgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcblxyXG4gICAgICAgIC8vIFRPRE8gaGFuZGxlIG5ldHdvcmsgZXJyb3JzXHJcbiAgICAgICAgZXJyb3JzID0gcmVzcG9uc2UuZXJyb3JzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnRva2VuKSB7XHJcbiAgICAgICAgICAgICRzZXNzaW9uLnRva2VuID0gcmVzcG9uc2UudG9rZW47XHJcbiAgICAgICAgICAgIGdvdG8oJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG4gICAgPHRpdGxlPlNpZ24gaW4g4oCiIENvbmR1aXQ8L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPGRpdiBjbGFzcz1cImF1dGgtcGFnZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBwYWdlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTMgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlNpZ24gSW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXhzLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcmVnaXN0ZXJcIj5OZWVkIGFuIGFjY291bnQ/PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIHsjaWYgZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj57ZXJyb3JzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey9pZn1cclxuXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e3N1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLWxnXCIgdHlwZT1cImVtYWlsXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIGJpbmQ6dmFsdWU9e2VtYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1sZ1wiIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBiaW5kOnZhbHVlPXtwYXNzd29yZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSBwdWxsLXhzLXJpZ2h0XCIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaWduIGluXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiJdLCJuYW1lcyI6WyJzdG9yZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBOENrRSxHQUFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7Ozs7O3dDQUFOLEdBQU0sQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBOzs7Ozs7Ozs7O0dBQXBELG9CQUEyRCxDQUFBLE1BQUEsRUFBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUE7Ozs7d0RBQWIsR0FBTSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBRG5ELEdBQU0sQ0FBQSxDQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7Ozs7Ozs7Ozs7YUFMZ0IsU0FBTyxDQUFBLENBQUE7Ozs7YUFFVixrQkFBZ0IsQ0FBQSxDQUFBOzs7Ozs7Ozs7Ozs7YUFjK0IsU0FFbkUsQ0FBQSxDQUFB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
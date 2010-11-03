Ext.namespace('F3.TYPO3.UserInterface.BreadcrumbMenu');

/*                                                                        *
 * This script belongs to the FLOW3 package "TYPO3".                      *
 *                                                                        *
 * It is free software; you can redistribute it and/or modify it under    *
 * the terms of the GNU General Public License as published by the Free   *
 * Software Foundation, either version 3 of the License, or (at your      *
 * option) any later version.                                             *
 *                                                                        *
 * This script is distributed in the hope that it will be useful, but     *
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHAN-    *
 * TABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General      *
 * Public License for more details.                                       *
 *                                                                        *
 * You should have received a copy of the GNU General Public License      *
 * along with the script.                                                 *
 * If not, see http://www.gnu.org/licenses/gpl.html                       *
 *                                                                        *
 * The TYPO3 project - inspiring people to share!                         *
 *                                                                        */

/**
 * @class F3.TYPO3.UserInterface.BreadcrumbMenu.Loader
 *
 * Provides for lazy loading of the BreadcrumbMenuComponent's child nodes
 *
 * @namespace F3.TYPO3.UserInterface.BreadcrumbMenu
 * @extends Ext.tree.TreeLoader
 */
F3.TYPO3.UserInterface.BreadcrumbMenu.Loader = Ext.extend(Ext.tree.TreeLoader, {

	/**
	 * @param {Object} attr
	 * @return {Object}
	 */
	createNode : function(attr) {
		if (!attr.uiProvider) {
			attr.uiProvider = F3.TYPO3.UserInterface.BreadcrumbMenu.NodeUI;
		}
		attr.singleClickExpand = true;
		return Ext.tree.TreeLoader.prototype.createNode.call(this, attr);
	}
});

Ext.reg('F3.TYPO3.UserInterface.BreadcrumbMenu.Loader', F3.TYPO3.UserInterface.BreadcrumbMenu.Loader);